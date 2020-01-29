import React from 'react';
import './styles/BadgeNew.css'
import header from '../images/platziconf-logo.svg'
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm'
import PageLoading from '../components/PageLoading'
import api from '../api'
import md5 from 'md5'

class BadgeNew extends React.Component{
    state = { 
        loading: false,
        error: null,
        form:{
        firstName: '',
        lastName:'',
        email:'',
        jobTitle:'',
        twitter:''

    }};
    handleChange = e =>{
        // const nextForm = this.state.form;
        // nextForm[e.target.name] = e.target.value;
        this.setState({
            // form: nextForm,
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        });
    }
    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ loading: true, error: null });
    
        try {
            const hash = md5(this.state.form.email);
            const hashedGravatar = `https://www.gravatar.com/avatar/${hash}?d=identicon`;
            this.state.form = {
               ...this.state.form,
               avatarUrl: hashedGravatar
            }
          await api.badges.create(this.state.form);
          this.setState({ loading: false });
    
          this.props.history.push('/badges');
        } catch (error) {
          this.setState({ loading: false, error: error });
        }
      };
    render(){
        if(this.state.loading){
            return <PageLoading />;
        }
        return(
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge firstName={this.state.form.firstName || 'First Name'} lastName={this.state.form.lastName || 'Last Name'} jobTitle={this.state.form.jobTitle || 'Job'} twitter={this.state.form.twitter || 'twitter'} email={this.state.form.email || 'email'} avatarUrl="https://es.gravatar.com/avatar?d=identicon"/>
                            {/* el orden no importa al enviar los props */}
                        </div>
                        <div className="col-6">
                            <h1>New Attendent</h1>  
                            <BadgeForm onChange={this.handleChange} onSubmit={this.handleSubmit} formValues={this.state.form} error={this.state.error} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default BadgeNew