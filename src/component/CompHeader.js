function CompHeader() {
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__top-img">
          <img src={require("../img/global-banner-web.png")} alt="logo" />
          <div className="header__top-icon">
            <i className="fas fa-times" />
          </div>
        </div>
      </div>
      <div className="header__loginout">
        {/* logo use svg */}
        <div className="header__loginout-logo">
          <svg
            width={134}
            height={22}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M109.696 7.33c3.34 0 5.141 2.635 5.141 5.112 0 2.54-1.636 5.273-5.231 5.273a4.677 4.677 0 01-3.057-1.14l-.222-.193v5.44c0 .098-.093.178-.209.178h-2.129c-.114 0-.208-.08-.208-.178V7.79c0-.1.094-.18.208-.18h2.129c.116 0 .209.08.209.18v.919l.223-.202c.86-.77 1.946-1.176 3.146-1.176zm-38.745.001c.916 0 1.839.186 2.58.515l.313.152a.171.171 0 01.086.145v2.478c0 .099-.093.179-.207.179a.266.266 0 01-.157-.065l-.118-.12c-.757-.775-1.645-1.152-2.716-1.152-1.699 0-3.132 1.365-3.132 2.984 0 1.78 1.342 3.023 3.264 3.023.897 0 1.682-.312 2.392-.953l.304-.292c.111-.127.369-.045.369.106l.001 2.459c0 .056-.088.137-.141.17-.903.436-1.838.64-2.946.64-3.228 0-5.757-2.23-5.757-5.075 0-2.961 2.52-5.194 5.865-5.194zM60 4.397c.092 0 .169.05.196.12l.01.056v3.343h1.72c.092 0 .172.052.2.123l.01.056V9.56c0 .078-.06.143-.144.166l-.066.009h-1.72v7.688c0 .079-.058.144-.14.167L60 17.6H57.89c-.092 0-.169-.052-.196-.121l-.01-.056V9.735h-.868c-.091 0-.168-.05-.195-.12l-.01-.055V8.095c0-.078.06-.146.14-.17l.065-.01h.868V4.575c0-.079.058-.145.14-.168l.066-.01H60zM41.135 7.33c1.186 0 2.266.402 3.122 1.162l.225.198v-.906c0-.1.094-.18.207-.18h2.129c.114 0 .21.08.21.18v9.322c0 .1-.094.176-.21.176H44.69c-.116 0-.207-.077-.207-.176v-.826l-.223.191a4.696 4.696 0 01-3.056 1.127c-3.434 0-5.231-2.623-5.231-5.213 0-2.45 1.81-5.055 5.163-5.055zm-5.259-2.935c.04 0 .074.02.089.048l.007.03v1.711c0 .032-.024.058-.058.07l-.038.005h-3.42c-.717 0-1.18.4-1.238 1.055l-.006.144v1.015h3.766c.042 0 .08.02.095.05l.008.031v1.66c0 .032-.026.06-.063.072l-.04.007H31.25v7.23c0 .03-.026.057-.062.069l-.038.006h-2.444c-.043 0-.08-.02-.096-.046l-.009-.03V7.22c0-.951.264-1.67.783-2.136.465-.413 1.137-.643 2.004-.68l.266-.007h4.222zm82.746 3.301c.09 0 .169.052.197.122l.011.055v5.105c0 1.76.624 2.51 2.086 2.51 1.402 0 2.032-.69 2.082-2.295l.003-.215V7.874c0-.079.06-.145.142-.168l.066-.009h2.104c.091 0 .171.052.199.122l.011.055v5.3c0 2.812-1.679 4.425-4.607 4.425-2.839 0-4.503-1.517-4.602-4.173l-.004-.252v-5.3c0-.077.06-.144.141-.168l.064-.009h2.107zm11.487-.366c1.247 0 2.306.552 2.945 1.523l.115.188.069.137a.137.137 0 01.009.032c0 .05-.025.096-.069.13l-.05.028-1.738.824c-.107.04-.199.017-.255-.044l-.035-.052-.028-.046c-.212-.4-.645-.667-1.074-.667-.381 0-.807.273-.807.664 0 .449.525.737 1.261 1.04l.993.393.344.145c1.143.506 2.21 1.244 2.21 2.685 0 1.844-1.688 3.289-3.847 3.289-1.655 0-3.141-.814-3.769-2.051l-.117-.253-.006-.036c0-.058.032-.11.079-.14l1.906-.769a.25.25 0 01.176.024l.039.03.057.09c.461.758.919 1.052 1.635 1.052.645 0 1.297-.363 1.297-1.058 0-.336-.15-.512-.487-.727l-.135-.083-1.915-.904c-1.213-.581-2.141-1.136-2.141-2.531 0-1.606 1.498-2.913 3.338-2.913zm-77.76 0c1.248 0 2.307.552 2.946 1.523l.115.188.032.06c.037.07.045.099.046.109 0 .05-.025.096-.069.13l-.05.028-1.739.824c-.108.04-.197.017-.253-.044l-.035-.052-.027-.046c-.215-.4-.646-.667-1.076-.667-.38 0-.808.273-.808.664 0 .449.526.737 1.262 1.04l.994.393.344.145c1.144.506 2.21 1.244 2.21 2.685 0 1.844-1.69 3.289-3.847 3.289-1.655 0-3.14-.814-3.77-2.051l-.118-.253-.004-.036c0-.058.031-.11.079-.14l1.786-.723a4.37 4.37 0 01.118-.045.157.157 0 01.057-.008c.046 0 .088.013.12.03l.04.03.056.09c.461.759.92 1.053 1.636 1.053.644 0 1.296-.363 1.296-1.058 0-.336-.149-.512-.486-.727l-.136-.083-1.914-.904-.355-.175c-1.035-.525-1.786-1.1-1.786-2.356 0-1.606 1.496-2.913 3.337-2.913zm27.85 0c1.186 0 2.266.402 3.122 1.162l.225.198v-.906c0-.1.093-.18.207-.18h2.128c.115 0 .21.08.21.18v9.322c0 .1-.093.176-.21.176h-2.128c-.117 0-.207-.077-.207-.176v-.826l-.224.191a4.696 4.696 0 01-3.055 1.127c-3.435 0-5.232-2.623-5.232-5.213 0-2.45 1.81-5.055 5.163-5.055zm18.445 0c1.624 0 3.551.687 3.657 3.905l.005.282v5.54c0 .076-.061.142-.143.166l-.065.009h-2.103c-.087 0-.163-.048-.192-.11l-.014-.049v-5.26c0-1.665-.541-2.44-1.705-2.44-1.514 0-1.867 1.157-1.89 2.918l-.006 4.795c-.015.067-.073.12-.147.139l-.057.007h-2.1c-.09 0-.167-.05-.195-.12l-.01-.056v-4.912c0-1.29-.197-2.771-1.731-2.771-1.496 0-1.842 1.105-1.866 2.904l-.002 4.78c0 .076-.06.142-.144.166l-.066.009H87.77c-.088 0-.166-.051-.194-.12l-.01-.056V7.782c0-.079.058-.145.14-.169l.064-.009h2.101c.092 0 .171.052.2.122l.01.056v.545l.217-.174c.65-.522 1.475-.822 2.26-.822 1.093 0 1.998.375 2.695 1.116l.157.178.1.116.103-.112c.744-.813 1.879-1.298 3.032-1.298zm10.567 2.075c-1.967 0-2.996 1.558-2.996 3.097 0 1.509.937 3.136 2.996 3.136 2.127 0 3.079-1.574 3.079-3.136 0-1.542-.952-3.097-3.079-3.097zm-67.703-.021c-1.964 0-2.99 1.54-2.99 3.063 0 1.49.936 3.1 2.99 3.1 2.131 0 3.086-1.558 3.086-3.1 0-1.526-.955-3.063-3.086-3.063zm39.064 0c-1.964 0-2.99 1.54-2.99 3.063 0 1.49.936 3.1 2.99 3.1 2.131 0 3.086-1.558 3.086-3.1 0-1.526-.955-3.063-3.086-3.063z"
              fill="#222"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.344 5.73l9.015 16.25C4.582 21.642 0 16.857 0 11c0-1.773.42-3.447 1.166-4.93l.178-.34zm1.881-2.508l18.512 10.252a11.019 11.019 0 01-7.93 8.165l-.32.079L3.225 3.222zM11.011 0c5.76 0 10.483 4.418 10.967 10.047l.022.302L5.737 1.342A10.973 10.973 0 0111.01 0z"
              fill="#ED234B"
            />
          </svg>
        </div>
        <div className="header__loginout-btn">
          <div>
            <svg
              width={20}
              height={20}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.977 2.5c1.462 0 2.442 1.11 2.518 2.21l.005.138V5.5H14a2.5 2.5 0 012.495 2.336L16.5 8v6a2.5 2.5 0 01-2.336 2.495L14 16.5H6a2.5 2.5 0 01-2.495-2.336L3.5 14V8a2.5 2.5 0 012.336-2.495L6 5.5h1.5v-.652c0-1.11.878-2.253 2.296-2.342l.18-.006zM14 6.5H6a1.5 1.5 0 00-1.493 1.356L4.5 8v6a1.5 1.5 0 001.356 1.493L6 15.5h8a1.5 1.5 0 001.493-1.355L15.5 14V8a1.5 1.5 0 00-1.355-1.493L14 6.5zM10 9a2 2 0 110 4 2 2 0 010-4zm0 1a1 1 0 100 2 1 1 0 000-2zm-.023-6.5c-.863 0-1.41.62-1.471 1.233l-.006.115V5.5h3v-.652c0-.554-.466-1.18-1.21-1.32l-.154-.02-.16-.008z"
                fill="#222"
              />
            </svg>
            <span>Login</span>
          </div>
          <div>
            <svg
              width={20}
              height={20}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.48 11.15c1.721 0 3.12 1.395 3.215 3.145l.005.188V15.9a.5.5 0 01-.992.09l-.008-.09v-1.417c0-1.239-.917-2.246-2.068-2.328l-.152-.005H5.72c-1.17 0-2.136.955-2.215 2.173l-.005.16V15.9a.5.5 0 01-.992.09L2.5 15.9v-1.417c0-1.773 1.34-3.23 3.037-3.328l.183-.005h4.76zm4.645-4.25a.5.5 0 01.492.41l.008.09v1.624l1.625.001a.5.5 0 01.09.992l-.09.008-1.625-.001v1.626a.5.5 0 01-.992.09l-.008-.09v-1.626L13 10.025a.5.5 0 01-.09-.992l.09-.008 1.625-.001V7.4a.5.5 0 01.5-.5zM8.1 3.5a3.05 3.05 0 110 6.1 3.05 3.05 0 010-6.1zm0 1a2.05 2.05 0 100 4.1 2.05 2.05 0 000-4.1z"
                fill="#222"
              />
            </svg>
            <span>Sign up</span>
          </div>
        </div>
      </div>
      <div className="header__menu">
        <ul>
          <li>
            <a href>Category</a>
          </li>
          <li>
            <a href>Online</a>
          </li>
          <li>
            <a href>Offline</a>
          </li>
          <li>
            <a href>Corporate Training</a>
          </li>
          <li>
            <a href>Event</a>
          </li>
          <li>
            <a href>Course Reviews</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default CompHeader;