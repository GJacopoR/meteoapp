import { FormApi, SubmissionErrors } from "final-form";
import { Field, Form } from "react-final-form";
import styles from "./style.module.scss";

const onSubmit = (values: any) => {
    window.alert(JSON.stringify(values, null, 2))
}

export default function LoginModal (){
    return <section className={styles.LoginModal}>
        <Form
        onSubmit={onSubmit}
        validate={values => {
            const errors = {username: '', password: '', confirm: ''}
            if (!values.username) {
                errors.username = 'Required'
            }
            if (!values.password) {
                errors.password = 'Required'
            }
            if (!values.confirm) {
                errors.confirm = 'Required'
            } else if (values.confirm !== values.password) {
                errors.confirm = 'Must match'
            }
            return errors
        }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}
                className={styles.LoginModal__formContainer}>
                <Field name="username">
                    {({ input, meta }) => (
                        <div>
                            <label>Username</label>
                            <input {...input} type="text" placeholder="Username" />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                    )}
                </Field>
                <Field name="password">
                    {({ input, meta }) => (
                        <div>
                            <label>Password</label>
                            <input {...input} type="password" placeholder="Password" />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                    )}
                </Field>
                <Field name="confirm">
                    {({ input, meta }) => (
                        <div>
                            <label>Confirm</label>
                            <input {...input} type="password" placeholder="Confirm" />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                    )}
                </Field>
                    <div className="buttons">
                        <button type="submit" disabled={submitting}>
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={form.reset}
                            disabled={submitting || pristine}
                            >
                            Reset
                        </button>
                    </div>
                    <pre>{JSON.stringify(values, null, 2)}</pre>
            </form>
        )}/>
    </section>
}