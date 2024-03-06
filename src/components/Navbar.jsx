import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Navbar = () => {

  const state = useSelector((state)=>state.cart.items)
  console.log(state)

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link class="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="/Netflix">
              Netflix
            </Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="/form1">
              form 1
            </Link>
          </li>
          
          <li class="nav-item active">
            <Link class="nav-link" to="/useeffect">
            useeffect
            </Link>
          </li>
          
          <li class="nav-item active">
            <Link class="nav-link" to="/apidemo1">
            apidemo1
            </Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="/apidemo2">
            apidemo2
            </Link>
          </li>
          
          <li class="nav-item active">
            <Link class="nav-link" to="/products">
            products
            </Link>
          </li>
          <li class="nav-item active">
            {
              state?.length
            }
          </li>
        </ul>
      </div>
    </nav>
  );
};
