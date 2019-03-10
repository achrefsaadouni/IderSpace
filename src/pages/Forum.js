import React, { Component } from "react";

class Forum extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="main-header">
          <div className="content-bg-wrap bg-group" />
          <div className="container">
            <div className="row">
              <div className="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
                <div className="main-header-content">
                  <h1>Welcome to the Forums!</h1>
                  <p>
                    Here in the forums you’ll be able to easily create and
                    manage categories and topics to share with the community! We
                    included some of the most used topics, like music, comics,
                    movies, and community, each one with a cool and customizable
                    illustration so you can have fun with them!{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            className="img-bottom"
            src="img/group-bottom.png"
            alt="friends"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ui-block responsive-flex">
                <div className="ui-block-title">
                  <div className="h6 title">Olympus Forums</div>
                  <form className="w-search">
                    <div className="form-group with-button">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Search the forums..."
                      />
                      <button>
                        <svg className="olymp-magnifying-glass-icon">
                          <use xlinkHref="svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon" />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                <table className="forums-table">
                  <thead>
                    <tr>
                      <th className="forum">Forum</th>

                      <th className="topics">Topics</th>

                      <th className="posts">Posts</th>

                      <th className="freshness">Freshness</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="forum">
                        <div className="forum-item">
                          <img src="img/forum1.png" alt="forum" />
                          <div className="content">
                            <a href="#" className="h6 title">
                              The Community
                            </a>
                            <p className="text">
                              Talk about dinner parties, reunions and more!
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="topics">
                        <a href="#" className="h6 count">
                          3
                        </a>
                      </td>
                      <td className="posts">
                        <a href="#" className="h6 count">
                          10
                        </a>
                      </td>
                      <td className="freshness">
                        <div className="author-freshness">
                          <div className="author-thumb">
                            <img src="img/avatar10-sm.jpg" alt="author" />
                          </div>
                          <a href="#" className="h6 title">
                            Elaine Dreyfuss
                          </a>
                          <time
                            className="entry-date updated"
                            datetime="2017-06-24T18:18"
                          >
                            13 hours, 58 minutes ago
                          </time>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="forum">
                        <div className="forum-item">
                          <img src="img/forum2.png" alt="forum" />
                          <div className="content">
                            <a href="#" className="h6 title">
                              Video Shack
                            </a>
                            <p className="text">
                              All related to your favourite movies and tv shows!
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="topics">
                        <a href="#" className="h6 count">
                          14
                        </a>
                      </td>
                      <td className="posts">
                        <a href="#" className="h6 count">
                          68
                        </a>
                      </td>
                      <td className="freshness">
                        <div className="author-freshness">
                          <div className="author-thumb">
                            <img src="img/avatar51-sm.jpg" alt="author" />
                          </div>
                          <a href="#" className="h6 title">
                            Nicholas Grissom
                          </a>
                          <time
                            className="entry-date updated"
                            datetime="2017-06-24T18:18"
                          >
                            2 hours, 7 minutes ago
                          </time>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="forum">
                        <div className="forum-item">
                          <img src="img/forum3.png" alt="forum" />
                          <div className="content">
                            <a href="#" className="h6 title">
                              The Robot’s Dungeon
                            </a>
                            <p className="text">
                              Comics, Anime and all your geeky needs!
                            </p>
                            <ul className="sub-forums">
                              <li>
                                <a href="#" className="h6">
                                  Comics
                                </a>
                              </li>
                              <li>
                                <a href="#" className="h6">
                                  Anime & Manga
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                      <td className="topics">
                        <a href="#" className="h6 count">
                          58
                        </a>
                      </td>
                      <td className="posts">
                        <a href="#" className="h6 count">
                          107
                        </a>
                      </td>
                      <td className="freshness">
                        <div className="author-freshness">
                          <div className="author-thumb">
                            <img src="img/avatar48-sm.jpg" alt="author" />
                          </div>
                          <a href="#" className="h6 title">
                            Marina Valentine
                          </a>
                          <time
                            className="entry-date updated"
                            datetime="2017-06-24T18:18"
                          >
                            42 minutes ago
                          </time>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="forum">
                        <div className="forum-item">
                          <img src="img/forum4.png" alt="forum" />
                          <div className="content">
                            <a href="#" className="h6 title">
                              Arcade Planet
                            </a>
                            <p className="text">
                              The latest about all gaming news and events!
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="topics">
                        <a href="#" className="h6 count">
                          32
                        </a>
                      </td>
                      <td className="posts">
                        <a href="#" className="h6 count">
                          49
                        </a>
                      </td>
                      <td className="freshness">
                        <div className="author-freshness">
                          <div className="author-thumb">
                            <img src="img/avatar39-sm.jpg" alt="author" />
                          </div>
                          <a href="#" className="h6 title">
                            Chris Greyson
                          </a>
                          <time
                            className="entry-date updated"
                            datetime="2017-06-24T18:18"
                          >
                            1 hour, 20 minutes ago
                          </time>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="forum">
                        <div className="forum-item">
                          <img src="img/forum5.png" alt="forum" />
                          <div className="content">
                            <a href="#" className="h6 title">
                              The Boombox
                            </a>
                            <p className="text">
                              Talk about the best music in the world!
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="topics">
                        <a href="#" className="h6 count">
                          60
                        </a>
                      </td>
                      <td className="posts">
                        <a href="#" className="h6 count">
                          129
                        </a>
                      </td>
                      <td className="freshness">
                        <div className="author-freshness">
                          <div className="author-thumb">
                            <img src="img/avatar52-sm.jpg" alt="author" />
                          </div>
                          <a href="#" className="h6 title">
                            Green Goo Rock
                          </a>
                          <time
                            className="entry-date updated"
                            datetime="2017-06-24T18:18"
                          >
                            5 minutes ago
                          </time>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="forum">
                        <div className="forum-item">
                          <img src="img/forum6.png" alt="forum" />
                          <div className="content">
                            <a href="#" className="h6 title">
                              Around the World
                            </a>
                            <p className="text">
                              Start topics in your native language and have fun!
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="topics">
                        <a href="#" className="h6 count">
                          12
                        </a>
                      </td>
                      <td className="posts">
                        <a href="#" className="h6 count">
                          18
                        </a>
                      </td>
                      <td className="freshness">
                        <div className="author-freshness">
                          <div className="author-thumb">
                            <img src="img/avatar40-sm.jpg" alt="author" />
                          </div>
                          <a href="#" className="h6 title">
                            Mathilda Brinker
                          </a>
                          <time
                            className="entry-date updated"
                            datetime="2017-06-24T18:18"
                          >
                            4 months, 12 hours ago
                          </time>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">Featured Topics</h6>
                </div>
                <div className="ui-block-content">
                  <ul className="widget w-featured-topics">
                    <li>
                      <i className="icon fa fa-star" aria-hidden="true" />
                      <div className="content">
                        <a href="#" className="h6 title">
                          The new Goddess of War trailer was launched at E3!
                        </a>
                        <time
                          className="entry-date updated"
                          datetime="2017-06-24T18:18"
                        >
                          2 hours, 16 minutes ago
                        </time>
                      </div>
                    </li>
                    <li>
                      <i className="icon fa fa-star" aria-hidden="true" />
                      <div className="content">
                        <a href="#" className="h6 title">
                          This year’s ComixCon will have the best presentations
                        </a>
                        <time
                          className="entry-date updated"
                          datetime="2017-06-24T18:18"
                        >
                          14 hours, 36 minutes ago
                        </time>
                      </div>
                    </li>
                    <li>
                      <i className="icon fa fa-star" aria-hidden="true" />
                      <div className="content">
                        <a href="#" className="h6 title">
                          Here are the behind-the-scenes photos of “Vilords”
                        </a>
                        <time
                          className="entry-date updated"
                          datetime="2017-06-24T18:18"
                        >
                          9 hours, 8 minutes ago
                        </time>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">Recent Topics</h6>
                </div>
                <div className="ui-block-content">
                  <ul className="widget w-featured-topics">
                    <li>
                      <div className="content">
                        <a href="#" className="h6 title">
                          Summer is Coming! Picnic in the east boulevard park
                        </a>
                        <time
                          className="entry-date updated"
                          datetime="2017-06-24T18:18"
                        >
                          26 minutes ago
                        </time>
                        <div className="forums">The Community</div>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <a href="#" className="h6 title">
                          Kung Fighters released a new video, check it out here!
                        </a>
                        <time
                          className="entry-date updated"
                          datetime="2017-06-24T18:18"
                        >
                          44 minutes ago
                        </time>
                        <div className="forums">The Boombox</div>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <a href="#" className="h6 title">
                          What’s your favourite season?
                        </a>
                        <time
                          className="entry-date updated"
                          datetime="2017-06-24T18:18"
                        >
                          59 minutes ago
                        </time>
                        <div className="forums">The Community</div>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <a href="#" className="h6 title">
                          Who had the best presentation at this year’s E3? Rate
                          them!
                        </a>
                        <time
                          className="entry-date updated"
                          datetime="2017-06-24T18:18"
                        >
                          1 hour, 3 minutes ago
                        </time>
                        <div className="forums">Arcade Planet</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Forum;
