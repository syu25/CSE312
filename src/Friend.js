import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
// import './Friend.css';

class Friend extends React.Component {
	render() {
		return (
			<React.Fragment>
				<section class="container">
					<div class="profile-grid my-1">
						<div class="profile-top bg-primary p-2">
							<img
								class="round-img my-1"
								src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
								alt=""
							/>
							<h1 class="large">John Doe</h1>
							<p class="lead">Occuptation</p>
							<p>New York, NY</p>
							<div class="icons my-1">
								<a href="#" target="_blank" rel="noopener noreferrer">
									<i class="fas fa-globe fa-2x"></i>
								</a>
							</div>
						</div>
						<button type="button">Send Friend Request</button>
						<button type="button">Block</button>
						<div class="profile-about bg-light p-2">
							<h2 class="text-primary">John's Profile</h2>
							<p>Hi I'm John and I like hiking.</p>
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
								<p>
									<strong>Description: </strong>Lorem ipsum dolor sit amet
									consectetur adipisicing elit. Dignissimos placeat, dolorum
									ullam ipsam, sapiente suscipit dicta eius velit amet
									aspernatur asperiores modi quidem expedita fugit.
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

export default Friend;
