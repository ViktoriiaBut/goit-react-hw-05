import { Formik, Form, Field } from "formik";

const MovieSearch = ({ handleChangeQuery }) => {
    const initialValues = {
        query: '',
    };
    const handleSubmit = values => {
        console.log(values);
        handleChangeQuery(values.query)
    };

    return (
     <div>
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
         <Form>
         <Field name='query'/>
         <button type='submit'>Search</button>
         </Form>
        </Formik>
     </div>
    )
}

export default MovieSearch;