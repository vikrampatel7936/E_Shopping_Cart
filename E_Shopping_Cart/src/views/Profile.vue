<template>
  <div class="profilemain">
    <h1 class="titl">Profile</h1>
    <div class="container">
<div class="row gutters">
<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
<div class="card h-100">
	<div class="card-body backgroundclr">
		<div class="account-settings">
			<div class="user-profile">
				<div class="user-avatar">
					<img src="https://media-exp1.licdn.com/dms/image/C5603AQEcLeU-gRVXxg/profile-displayphoto-shrink_200_200/0/1634238487317?e=1650499200&v=beta&t=qQsZDRmGr034p1hszCLSoG3L-N1WhCucVg8nx7Ngzvc" alt="Darshil Admin">
				</div>
				<h5 class="user-name">Darshil Gadhiya</h5>
				<h6 class="user-email">group3@example.com</h6>
			</div>
			<div class="about">
				<h5>About</h5>
				<p>I'm Darshil. Full Stack Designer I enjoy creating user-centric, delightful and human experiences.</p>
			</div>
		</div>
	</div>
</div>
</div>
<div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
<div class="card h-100">
	<div class="card-body backgroundclr">
		<div class="row gutters">
			<div class="fontcustom">
				<h6 class="titlespacing">Personal Details</h6>
			</div>
			<form class="formpadding">
        <div class="loginmain"> 
            <input type="text" placeholder="Name">
            <br>
            <input type="email" placeholder="Email">
            <br>
            <input type="text" placeholder="About">
            <br>
            <input type="file" id="img" name="img" accept="image/*">
            <br>
            <a href="#"><div class="margn"><button class="btnclr btnwidth" type="submit">Update</button></div></a>
        </div> 
    </form>
		</div>
		<div class="row gutters">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h6 class="mt-3 mb-2 titlespacing">Change Password</h6>
			</div>
			<form class="formpadding">
        <div class="loginmain"> 
            <input type="password" placeholder="Current Password" required>
            <br>
            <input type="password" placeholder="New Password">
            <br>
            <input type="password" placeholder="Confirm New Password">
            <br>
            <a href="#"><div class="margn"><button class="btnclr btnwidth" type="submit">Submit</button></div></a>
        </div> 
    </form>
		</div>
	</div>
</div>
</div>
</div>
</div>
  </div>
</template>

<style>
.container {
  padding: 0 px;
}
.titl{
    padding-left: 50%;
    padding-bottom: 1%;
    margin-top: -3.5%;
}
.formpadding{
   padding-top: 10px;
   padding-left: 27.5%;
}
.margn{
   margin-bottom: 3%;
   margin-right: 7%;
   margin-top: 2%;
}
.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
}
form {
  border: 3px solid #f1f1f1;
}
.titlespacing{
    padding-left: 45%;
    padding-bottom: 1.5%;
    color: black;
}
.btnclr{
   background-image: linear-gradient(to bottom right,rgb(255, 72, 0),rgb(167, 0, 255));
   border-radius: 30px;
   margin-top: 10px;
   border: 0px;
}
.backgroundclr{
  background-image: linear-gradient(to bottom right,rgb(0, 255, 85),rgb(0, 221, 255),rgb(167, 0, 255));
}
input[type="text"],
input[type="password"],
input[type="email"],
input[type="file"] {
  width: 300px;
  margin: 8px 0;
  padding: 12px 20px;
  display: inline-block;
  border: 2px solid #333;
  box-sizing: border-box;
  border-radius: 25px;
}
.btnwidth{
    width: 53%;
    height: 55px;
    font-weight: 600;
    color: white;
}
.card {
  background: #ffffff;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  border: 0;
  margin-bottom: 1rem;
}

.profilemain {
  margin-top: 5%;
  color: #2e323c;
  position: relative;
  height: 100%;
}

.container::after,
.row::after {
  content: "";
  clear: both;
  display: table;
}
.loginmain {
  padding: 25px;
}
.card-body {
  flex: 1 1 auto;
  padding: 1rem 1rem;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
}

.account-settings .user-profile {
  margin: 0 0 1rem 0;
  padding-bottom: 1rem;
  text-align: center;
}
.account-settings .user-profile .user-avatar {
  margin: 0 0 1rem 0;
}
.account-settings .user-profile .user-avatar img {
  width: 90px;
  height: 90px;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;
}
.account-settings .user-profile h5.user-name {
  margin: 0 0 0.5rem 0;
}
.account-settings .user-profile h6.user-email {
  margin: 0;
  font-size: 0.8rem;
  font-weight: 400;
  color: black;
}
.account-settings .about {
  margin: 2rem 0 0 0;
  text-align: center;
}
.account-settings .about h5 {
  margin: 0 0 15px 0;
  color: #007ae1;
}
.account-settings .about p {
  font-size: 0.825rem;
}
.form-control {
  border: 1px solid #cfd1d8;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  font-size: 0.825rem;
  background: #ffffff;
  color: #2e323c;
}

@import "~bootstrap/dist/css/bootstrap.css";
</style>