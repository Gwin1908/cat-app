import "./NavigationBar.scss"

export default function NavigationBar() {
  return (
    <div className="navigation">
      <form className="search" action="">
        <input
          className="search-input"
          type="text"
          placeholder="Search for breeds by name"
        />
        <button className="search-button">
          <img src="search.svg" alt="search button" />
        </button>
      </form>
      <div className="nav-buttons">
        <button>
          <img src="Likes.svg" alt="Likes" />
        </button>
        <button>
          <img src="Favorites.svg" alt="Favorites" />
        </button>
        <button>
          <img src="Dislikes.svg" alt="Dislikes" />
        </button>
      </div>
    </div>
  );
}
