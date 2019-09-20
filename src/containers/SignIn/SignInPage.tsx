import React from 'react';
import { Grid } from 'semantic-ui-react';
import SignInForm from './SignInForm';

class SignInPage extends React.Component {
    render() {
        return <Grid centered verticalAlign="middle" style={{ height: "100vh" }}>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <SignInForm />
                </Grid.Column>
            </Grid.Row>

        </Grid>
    }
}

export default SignInPage;