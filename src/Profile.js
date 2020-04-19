import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import './Profile.css';

class Profile extends React.Component {
	render() {
		return (
			<React.Fragment>
				<section class="container">
					<div class="profile-grid my-1">
						<div class="profile-top bg-primary p-2">
							<img
								class="round-img"
								src="https://images.squarespace-cdn.com/content/v1/54060c1be4b0bc1fe1015a3a/1462993287746-E7AJDG3ICWY70Q8SSR28/ke17ZwdGBToddI8pDm48kOyctPanBqSdf7WQMpY1FsRZw-zPPgdn4jUwVcJE1ZvWxYb2krSYGNt8NUBfJA7VeEJFbgE-7XRK3dMEBRBhUpw-EDlBxlJRiuUC7mQRBRKiEUn02whEbmJYqQv8fCj7liFMs3uqO_y_lqE4ilDJoVU/19cn7p7ve71yxjpg.jpg"
								alt=""
							/>
							<h1 class="large">Your Name Here</h1>
							<p class="lead">Occuptation</p>
							<p>New York, NY</p>
							<div class="icons my-1">
								<a href="#" target="_blank" rel="noopener noreferrer">
									<i class="fas fa-globe fa-2x"></i>
								</a>
							</div>
						</div>
						<button type="button">Edit Profile</button>
						<div class="profile-about bg-light p-2">
							<h2 class="text-primary">John's Profile</h2>
							<p>Hi! I'm me..</p>
							<div class="line"></div>
						</div>

						<div class="profile-exp bg-white p-2">
							<h2 class="text-primary">Occupation</h2>
							<div>
								<h3 class="text-dark">Bloomberg</h3>
								<p>Oct 20116 - Current</p>
								<p>
									<strong>Position: </strong>Senior Developer
								</p>

							</div>
						</div>

						<div class="profile-edu bg-white p-2">
							<h2 class="text-primary">Education</h2>
							<div>
								<h3>SUNY University at Buffalo</h3>
								<p>1994 - 2000</p>
								<p>
									<strong>Degree: </strong>Masters
								</p>
								<p>
									<strong>Field Of Study: </strong>Computer Science
								</p>
								<p>
									<strong>Description: </strong>Lorem ipsum dolor sit amet
									consectetur adipisicing elit. Dignissimos placeat, dolorum
									ullam ipsam, sapiente suscipit dicta eius velit amet
									aspernatur asperiores modi quidem expedita fugit.
								</p>
							</div>
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default Profile;