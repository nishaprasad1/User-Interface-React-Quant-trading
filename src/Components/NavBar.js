import React from 'react'
import { Outlet } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light px-5">
        <div class="container-fluid">
          {/*Burger menu button*/}
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          {/*LOGO */}
          <a class="navbar-brand" href="/">
            <i class="fa-solid fa-cubes-stacked h2"></i>
          </a>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about"> About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
            {/*profile */}
            <div class="nav-item">
              <a href="/login" className='h5'><i class="fa-solid fa-user text-black"></i></a>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}
