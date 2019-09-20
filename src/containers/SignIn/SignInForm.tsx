import React from 'react';
import { Form, Segment, Button, Message } from 'semantic-ui-react';
import { AppState } from '../../redux/store';
import { connect } from 'react-redux';
import { signIn } from '../../redux/sign-in/actions'
import { Credentials } from '../../redux/sign-in/types';

interface SignInFormProps {
    isLoading: boolean,
    hasErrors: boolean,
    signIn: (credentials: Credentials) => void
}

interface SignInFormState {
    email: string,
    password: string
}

class SignInForm extends React.Component<SignInFormProps, SignInFormState> {
    constructor(props: SignInFormProps) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleEmailChange(e: any) {
        this.setState({ email: e.target.value });
    }

    handlePasswordChange(e: any) {
        this.setState({ password: e.target.value });
    }

    onSignIn = () => {
        this.props.signIn({ email: this.state.email, password: this.state.password });
    }
    render = () => {
        const isLoading = this.props.isLoading;
        return (
            <div>
                <Form className="attached fluid segment">
                    <Form.Input disabled={this.props.isLoading} label="E-Mail address" labelPosition="left" icon='user' iconPosition='left' placeholder='Please, enter your E-mail address' onChange={this.handleEmailChange} />
                    <Form.Input disabled={this.props.isLoading} label="Password" labelPosition="left" icon="lock" iconPosition="left" placeholder="Please, enter your password" onChange={this.handlePasswordChange} />
                    <Button disabled={this.props.isLoading} loading={this.props.isLoading} onClick={this.onSignIn} fluid color='blue' >Sign in</Button>
                </Form>
                <Message attached='bottom' style={{ textAlign: 'right' }}>
                    New to us? <a href='#'>Sign Up</a>
                </Message>
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => {
    const signIn = state.signIn
    return {
        isLoading: signIn.isLoading,
        hasErrors: signIn.hasErrors
    }
};

export default connect(mapStateToProps, { signIn })(SignInForm);