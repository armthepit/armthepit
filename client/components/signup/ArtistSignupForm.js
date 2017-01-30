 import React from 'react';
 import { browserHistory } from 'react-router';
  import genre from '../../data/genres';
  import map from 'lodash/map';
 import classnames from 'classnames';
 import validateInput from '../../../server/shared/validations/artistsignup';
  import draftjs from 'draft-js';
  import { Editor } from 'react-draft-wysiwyg';
  import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
  import TextFieldGroup from '../common/TextFieldGroup';
  
  class ArtistSignupForm extends React.Component {
    constructor(props) {
     super(props);
     this.state = {
       username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
       genre: '',
       errors: {},
       isLoading: false
      }
  
      this.onChange = this.onChange.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
   }

   onChange(e) {
     this.setState({ [e.target.name]: e.target.value });
   }

  isValid() {
     const { errors, isValid } = validateInput(this.state);

     if (!isValid) {
       this.setState({ errors });
     }
 
     return isValid;
   }

   onSubmit(e) {
     e.preventDefault();
 
     if (this.isValid()) {
        this.setState({ errors: {}, isLoading: true });
        this.props.artistSignupRequest(this.state).then(
          () => {
           this.props.addFlashMessage({
             type: 'success',
             text: 'Artist, you signed up successfully. Welcome To Arm The Pit!'
           });
           browserHistory.push('/');
          },
          ({ data }) => this.setState({ errors: data, isLoading: false })
       );

     }
   }
  
    render() {
     const { errors } = this.state;
      const options = map(genre, (val, key) =>
        <option key={val} value={val}>{key}</option>
      );
      return (
        <form onSubmit={this.onSubmit}>
          <h1>Artist Signup</h1>
  
 
        <TextFieldGroup
           error={errors.email}
           label="Email"
           onChange={this.onChange}
           value={this.state.email}
           field="email"
         />
  
        <TextFieldGroup
           error={errors.password}
           label="Password"
           onChange={this.onChange}
           value={this.state.password}
           field="password"
           type="password"
         />
  
        <TextFieldGroup
           error={errors.passwordConfirmation}
           label="Password Confirmation"
           onChange={this.onChange}
           value={this.state.passwordConfirmation}
           field="passwordConfirmation"
           type="password"
         />
  

         <div className={classnames("form-group", { 'has-error': errors.genre })}>
            <label className="control-label">Genre</label>
            <select
              className="form-control"
             name="genre"
             onChange={this.onChange}
             value={this.state.genre}
           >
              <option value="" disabled>Choose Your Genre</option>
              {options}
            </select>
           {errors.genre && <span className="help-block">{errors.genre}</span>}
          </div>

          <div className="form-group" >
            <Editor
             //  wrapperClassName="wrapper-class"
             //  editorClassName="editor-class"
             //  toolbarClassName="toolbar-class"
             //  wrap perStyle={wrapperStyle}
             //  editorStyle={editorStyle}
             //  toolbarStyle={toolbarStyle}
            />
          </div>
 
 
  
          <div className="form-group">
           <button disabled={this.state.isLoading} className="btn btn-danger btn-lg">
              Sign up
            </button>
          </div>
       </form>
     );
   }
 }
 
 ArtistSignupForm.propTypes = {
   artistSignupRequest: React.PropTypes.func.isRequired,
   addFlashMessage: React.PropTypes.func.isRequired
 }
 
 export default ArtistSignupForm;