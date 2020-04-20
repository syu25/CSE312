import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import './Profile.css';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core';


class Profile extends Component {
	state = {
		bio: '',
		bioEdit: '',

		company: '',
		companyEdit: '',

		jobDates: '',
		jobDatesEdit: '',

		position: '',
		positionEdit: '',

		school: '',
		schoolEdit: '',

		year: '',
		yearEdit: '',

		degree: '',
		degreeEdit: '',

		major: '',
		majorEdit: '',

		bioOpen: false,
		occupationOpen: false,
		educationOpen: false

	};


	handleBioOpen = () => {
		this.setState({bioOpen: true})
	}
	handleOccupationOpen = () => {
		this.setState({occupationOpen: true})
	}
	handleEducationOpen = () => {
		this.setState({educationOpen: true})
	}

	handleBioClose = () => {
		this.setState({bioOpen: false})
	}
	handleOccupationClose = () => {
		this.setState({occupationOpen: false})
	}
	handleEducationClose = () => {
		this.setState({educationOpen: false})
	}

	


	onChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleBioSubmit = () => {

		// document.getElementById("bio").innerHTML = this.state.bio;
		this.setState((state) => {
			return {bio: this.state.bioEdit}
		  });
		this.handleBioClose();
	}	
	handleOccupationSubmit = () => {

		// document.getElementById("occupation").innerHTML = this.state.company;
		// document.getElementById("dates").innerHTML = this.state.jobDates;
		// document.getElementById("position").innerHTML = this.state.position;
		this.setState((state) => {
			return {company: this.state.companyEdit,
					jobDates: this.state.jobDatesEdit,
					position: this.state.positionEdit}
		  });

		this.handleOccupationClose();
	}
	handleEducationSubmit = () => {

		// document.getElementById("school").innerHTML = this.state.school;
		// document.getElementById("year").innerHTML = this.state.year;
		// document.getElementById("degree").innerHTML = this.state.degree;
		// document.getElementById("major").innerHTML = this.state.major;
		this.setState((state) => {
			return {school: this.state.schoolEdit,
					year: this.state.yearEdit,
					degree: this.state.degreeEdit,
					major: this.state.majorEdit}
		  });

		this.handleEducationClose();
	}

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
						
						<div class="profile-about bg-light p-2">
							<h2 class="text-primary">John's Profile <IconButton id="prof" onClick={this.handleBioOpen}><EditIcon fontSize="large" /></IconButton></h2>
							<Dialog
								aria-labelledby="prof"
								open={this.state.bioOpen}
								onClose={this.handleBioClose}
								fullWidth
								maxWidth='sm'>
									<DialogTitle>Edit your bio</DialogTitle>
									<DialogContent>
										<form>
											<TextField
												name="bioEdit"
												type="text"
												label="Bio"
												multiline
												rows="3"
												placeholder="Tell us about yourself"
												// className={classes.textField}
												value={this.state.bioEdit}
												onChange={this.onChange}
												fullWidth/>
											
										</form>
									</DialogContent>
									<DialogActions>
										<Button onClick={this.handleBioClose} color="primary">
											Cancel
										</Button>
										<Button onClick={this.handleBioSubmit} color="primary">
											Save
										</Button>
									</DialogActions>
							</Dialog>
							<p id="bio">{this.state.bio}</p>
							<div class="line"></div>
						</div>

						<div class="profile-exp bg-white p-2">
							<h2 class="text-primary">Occupation <IconButton onClick={this.handleOccupationOpen}><EditIcon fontSize="large" /></IconButton></h2>
							<Dialog
								open={this.state.occupationOpen}
								onClose={this.handleOccupationClose}
								fullWidth
								maxWidth='sm'>
									<DialogTitle>Edit your occupation</DialogTitle>
									<DialogContent>
										<form>
											<TextField
												name="companyEdit"
												type="text"
												label="Company"											
												placeholder="Your current company"
												// className={classes.textField}
												value={this.state.companyEdit}
												onChange={this.onChange}
												fullWidth/>
											<TextField
												name="jobDatesEdit"
												type="text"
												label="Start and end date"
												placeholder="your start and end dates"
												// className={classes.textField}
												value={this.state.jobDatesEdit}
												onChange={this.onChange}
												fullWidth/>
											<TextField
												name="positionEdit"
												type="text"
												label="Position Title"
												placeholder="whats your position"
												// className={classes.textField}
												value={this.state.positionEdit}
												onChange={this.onChange}
												fullWidth/>
										</form>
									</DialogContent>
									<DialogActions>
										<Button onClick={this.handleOccupationClose} color="primary">
											Cancel
										</Button>
										<Button onClick={this.handleOccupationSubmit} color="primary">
											Save
										</Button>
									</DialogActions>
							</Dialog>
							<div>
								<h3 id="occupation"class="text-dark">{this.state.company}</h3>
								<strong>Dates: </strong><p id="dates">{this.state.jobDates}</p>
								<strong>Position: </strong><p id="position">
									{this.state.position}
								</p>

							</div>
						</div>

						<div class="profile-edu bg-white p-2">
							<h2 class="text-primary">Education <IconButton onClick={this.handleEducationOpen}><EditIcon fontSize="large" /></IconButton></h2>
							<Dialog
								open={this.state.educationOpen}
								onClose={this.handleEducationClose}
								fullWidth
								maxWidth='sm'>
									<DialogTitle>Edit your education</DialogTitle>
									<DialogContent>
										<form>
											<TextField
												name="schoolEdit"
												type="text"
												label="School"									
												placeholder="What school did you go to?"
												// className={classes.textField}
												value={this.state.schoolEdit}
												onChange={this.onChange}
												fullWidth/>
											<TextField
												name="yearEdit"
												type="text"
												label="Graduation year"
												placeholder="Your graduation year"
												// className={classes.textField}
												value={this.state.yearEdit}
												onChange={this.onChange}
												fullWidth/>
											<TextField
												name="degreeEdit"
												type="text"
												label="Degree"
												placeholder="Your degree"
												// className={classes.textField}
												value={this.state.degreeEdit}
												onChange={this.onChange}
												fullWidth/>
											<TextField
												name="majorEdit"
												type="text"
												label="Field of study"
												placeholder="Your field of study"
												// className={classes.textField}
												value={this.state.majorEdit}
												onChange={this.onChange}
												fullWidth/>
										</form>
									</DialogContent>
									<DialogActions>
										<Button onClick={this.handleEducationClose} color="primary">
											Cancel
										</Button>
										<Button onClick={this.handleEducationSubmit} color="primary">
											Save
										</Button>
									</DialogActions>
							</Dialog>
							<div>
								<h3 id="school">{this.state.school}</h3>
								<strong>Graduation Year: </strong><p id="year">{this.state.year}</p>
								<strong>Degree: </strong><p id="degree">
									{this.state.degree}
								</p>
								<strong>Field Of Study: </strong><p id="major">
									{this.state.major}
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
