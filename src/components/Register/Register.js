import React from 'react';

class Register extends React.Component{
	constructor(){
		super()
		this.state = {
			regEmail: '',
			regName: '',
			regPassword: '',
		}
	}

	onRegNameChange = (event) => {
		this.setState({
			regName: event.target.value
		})
	}

	onRegEmailChange = (event) => {
		this.setState({
			regEmail: event.target.value
		})
	}

	onRegPasswordChange = (event) => {
		this.setState({
			regPassword: event.target.value
		})
	}

	onReg = () => {
		const { regEmail, regPassword, regName} = this.state;
		if(!regEmail || !regPassword || !regName){
			alert('Invalid form submission.')
		}
		else{
			fetch('http://localhost:3000/register', {
				method: 'post',
				headers: {'content-type': 'application/json'},
				body: JSON.stringify({
					name: this.state.regName,
					email: this.state.regEmail,
					password: this.state.regPassword
				})
			})
			.then(response => response.json())
			.then(user => {this.props.loadUser(user)})
			this.props.routeChange('home')
		}
	}

	render(){
		return(
			<div>
				<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
					<main className="pa4 black-80">
					  <div className="measure center">
					    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					      <legend className="f2 fw6 ph0 mh0">Register</legend>
					      <div className="mt3">
					        <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
					        <input 
					        onChange = {this.onRegNameChange}
					        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        type="email" 
					        name="name"  
					        id="name" />
					      </div>
					      <div className="mt3">
					        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
					        <input 
					        onChange = {this.onRegEmailChange}
					        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        type="email" 
					        name="email-address"  
					        id="email-address" />
					      </div>
					      <div className="mv3">
					        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
					        <input 
					        onChange = {this.onRegPasswordChange}
					        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        type="password" 
					        name="password"  
					        id="password" />
					      </div>
					    </fieldset>
					    <div className="">
					      <input 
					      onClick = {this.onReg}
					      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
					      type="submit" 
					      value="Register &amp; Sign in" />
					    </div>
					  </div>
					</main>
				</article>
			</div>
		);
	}
}

export default Register;