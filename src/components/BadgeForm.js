import React from 'react'

class BadgeForm extends React.Component{
    // state = {
    //     jobTitle: 'Developer'
    // };
    // handleChange = (e) =>{
    //     // console.log({
    //     //     name: e.target.name,
    //     //     value: e.target.value
    //     // });
    //     // this.setState({
    //     //     [e.target.name]: e.target.value
    //     // });
    // }
    handleClick = (e) =>{
        console.log('Buttom was clicked');
    }
    // handleSubmit = (e) =>{
    //     e.preventDefault();
    //     console.log(this.state)
    // }

    render(){
        return(
            <div>
                
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group"> {/*dar estilo al label dentro del div} */}
                        <label>First Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="firstName" value={this.props.formValues.firstName}/>
                    </div>
                    <div className="form-group"> {/*dar estilo al label dentro del div} */}
                        <label>Last Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" value={this.props.formValues.lastName}/>
                    </div>
                    <div className="form-group"> {/*dar estilo al label dentro del div} */}
                        <label>E-mail</label>
                        <input onChange={this.props.onChange} className="form-control" type="email" name="email" value={this.props.formValues.email}/>
                    </div>
                    <div className="form-group"> {/*dar estilo al label dentro del div} */}
                        <label>Job Title</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" value={this.props.formValues.jobTitle}/>
                    </div>
                    <div className="form-group"> {/*dar estilo al label dentro del div} */}
                        <label>Twitter</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" value={this.props.formValues.twitter}/>
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                    {this.props.error && (
                    <p className="text-danger">{this.props.error.message}</p>)}
                </form>
            </div>
        );
    }
}
export default BadgeForm;