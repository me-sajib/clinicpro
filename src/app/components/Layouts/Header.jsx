import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {  NavLink, useLocation } from 'react-router-dom'

export default function Header() {    
    const [navUrl, setNavUrl] = useState("dashboard");
    const location = useLocation();

    /**
     * Url based set active link 
     */
    useEffect(() => {
        setNavUrl(location.pathname);
    }, [location]);

    return (
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
            <div className="app-brand demo">
                <a href="/" className="app-brand-link">
                    <span className="app-brand-logo demo">
                        
                    </span>
                    <span className="app-brand-text demo menu-text fw-bolder ms-2">ClinicPRO</span>
                </a>

                <a href="#s" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                    <i className="bx bx-chevron-left bx-sm align-middle"></i>
                </a>
            </div>

            <div className="menu-inner-shadow"></div>

            <ul className="menu-inner py-1">
                <li className={`menu-item ${navUrl.includes("/dashboard") ? "active" : ""}`}>
                    <NavLink to="/dashboard" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-home-circle"></i>
                        <div data-i18n="Analytics">Dashboard</div>
                    </NavLink>
                </li>

               
                <li className={`menu-item ${navUrl.includes("/doctor") ? "active" : ""}`}>
                    <NavLink to="/doctors" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-health"></i>
                        <div data-i18n="Tables">Doctors</div>
                    </NavLink>
                </li>

                <li className={`menu-item ${navUrl.includes("/patient") ? "active" : ""}`}>
                    <NavLink to="/patients" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-handicap"></i>
                        <div data-i18n="Tables">Patients</div>
                    </NavLink>
                </li>

                <li className={`menu-item ${navUrl.includes("/schedule") ? "active" : ""}`}>
                    <NavLink to="/schedules" className="menu-link">
                        <i className="menu-icon tf-icons bx bxs-calendar"></i>
                        <div data-i18n="Tables">Schedules</div>
                    </NavLink>
                </li>

                <li className={`menu-item ${navUrl.includes("/employee") ? "active" : ""}`}>
                    <NavLink to="employee" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-female"></i>
                        <div data-i18n="Tables">Employee</div>
                    </NavLink>
                </li>

                <li className={`menu-item ${navUrl.includes("/salary_sheet") ? "active" : ""}`}>
                    <NavLink to="/salary_sheet" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-money"></i>
                        <div data-i18n="Tables">Salary Sheets</div>
                    </NavLink>
                </li>

            </ul>
        </aside>
    )
}
