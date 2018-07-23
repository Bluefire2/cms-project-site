import React, {Component} from 'react';
import md5 from "md5";

export default class NavbarItemWithDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDropdown: false
        };
    }

    toggleDropdown() {
        this.setState({showDropdown: !this.state.showDropdown});
    }

    hideDropdown(event) {
        // only hide if the click event was outside the element
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({showDropdown: false});
        }
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.hideDropdown.bind(this));
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.hideDropdown.bind(this));
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    render() {
        const {children, to, active, items} = this.props;
        return (
            <li className={`nav-item dropdown ${active ? "active" : ""}`}>
                <a ref={this.setWrapperRef.bind(this)} className="nav-link dropdown-toggle" href={to}
                   aria-haspopup="true" aria-expanded="false"
                   onClick={this.toggleDropdown.bind(this)}>{children}</a>
                <div className={`dropdown-menu ${this.state.showDropdown ? "show" : ""}`}>
                    {items.map(([to, text]) => {
                        return <a className="dropdown-item" key={md5(text)} href={to}>{text}</a>;
                    })}
                </div>
            </li>
        );
    }
}