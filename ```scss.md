```scss
.navbar-wrapper {
  .navbar-logo { // div
   & > img {

   }
  }
  .navbar-list { // ul
    display: flex;
    justify-content: space-between;
    // .is-collapse {
    //   display: flex;
    //   justify-content: center;
    //   flex-direction: column;
    // }
    .navbar-items { // li
    
    }
    .navbar-links { // a
      // A
      &:active {
        // B
      }

    }
  }
}

@media (max-width: 640px) {
  .navbar-wrapper {
    .navbar-list {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
  }
}
```