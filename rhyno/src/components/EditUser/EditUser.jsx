import React from 'react'
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { userLoginContext } from '../../contexts/userLoginContext';
import { Navigate, useNavigate } from 'react-router-dom';
function EditUser() {
    let {register,handleSubmit,setValue, formState: { errors }}=useForm()
    let {currentUser,setCurrentUser}=useContext(userLoginContext)
    let navigate=useNavigate();
     //error state
  let [err, setErr] = useState("");

   async  function  onSave(modifiedUser)
    {
      try{
        console.log(modifiedUser)
        let res=await fetch (`http://localhost:3000/users/${currentUser.id}`,{
            method:"PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(modifiedUser),
          });
          console.log(res)
          if (res.status === 200) {
            //navigate to user-profile component
            modifiedUser.id = currentUser.id;
            setCurrentUser(modifiedUser)
            navigate("/user-profile");
          }

      }
      catch (err) {
        console.log("err is ", err);
        setErr(err.message);
      }
       
    }


  return (
    <div>
    <p className="display-3 text-center">User Edit</p>

    <div className="row ">
      <div className="col-11 col-sm-10 col-md-6 mx-auto">
      
       
        <form
          className="mx-auto mt-2 bg-light p-3  " onSubmit={handleSubmit(onSave)}
         
       >
          {/* username */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="form-control"
              {...register("username",{ required: true })} //value is attribute
              value={setValue('username',currentUser.username)}
            
            />
               {/* validation error message on username */}
               {errors.username?.type === "required" && (
                <p className="text-danger lead">*Username is required</p>
              )}

           
          </div>
          {/* password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              {...register("password")}
              value={setValue('password',currentUser.password)}
              disabled
            />
            
          </div>
          {/* email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              {...register("email", { required: true })}
              value={setValue('email',currentUser.email)}
            />
              {/* validation error message on email */}
              {errors.email?.type === "required" && (
                <p className="text-danger lead">*Email is required</p>
              )}
           
          </div>
          {/* mobileno */}
          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">
              Mobile no
            </label>
            <input
              type="number"
              id="mobile"
              className="form-control"
              {...register("mobile", { required: true })}
              value={setValue('mobile',currentUser.mobile)}
            />
                 {/* validation error message on mobile */}
                 {errors.mobile?.type === "required" && (
                <p className="text-danger lead">*Mobile no is required</p>
              )}
            
          </div>
          {/* profile img */}
          <div className="mb-3">
            <label htmlFor="profile" className="form-label">
              Paste profile Image URL
            </label>
            <input
              type="text"
              id="profile"
              className="form-control"
              {...register("profileImage", { required: true })}
              value={setValue('profileImage',currentUser.profileImage)}
              disabled
            />
          
          </div>
          {/* submit button */}
          <button className="btn btn-success" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  </div>
);
}

export default EditUser