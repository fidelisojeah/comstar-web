import React from 'react';

function RightPortion(props) {
  return (
    <div className="col-lg-9">
      <div className="topbar--right">
        <div className="follow_us">
          <strong>
            Follow Us!!
          </strong>
          <ul>
            {
              props.socialLinks.map(social =>
                (
                  <li
                    key={social.id}
                  >
                    <a
                      href={social.link}
                      target="_blank"
                    >
                      <i
                        className={`fa ${social.icon}`}
                      />
                    </a>
                  </li>
                )
              )
            }
            {/* <li>
              <Link to="">
                <i class="fa fa-facebook"></i>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default RightPortion;
