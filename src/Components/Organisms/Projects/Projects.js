import { Form, Formik } from "formik";
import * as Yup from "yup";

import { FormInput } from "../../Atoms";

import './Projects.css'

const Projects = () => {
  const validate = Yup.object().shape({
    projectName: Yup.string()
      .max(10, "Cannot exceed more than 10 chars")
      .min(4, "must have 4 characters length")
      .required(),
    description: Yup.string()
      .max(20, "Cannot exceed more than 10 chars")
      .min(3, "must have 4 characters length")
      .required(),
    teamSize: Yup.number()
      .max(7, "team cannot have more than 7 members")
      .min(3, "must have atleast 3 members to start a team")
      .required(),
  })

  const initialValues = {
    projectName: "",
    description: "",
    teamSize: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={(values) => console.log(values)}
    >
      {(formik) => (
        <section >
          <Form className="form-container">
            <FormInput type="text" label="project name" id="project name" name="project name" />
            <FormInput type="text" id="description" label="description" name="description" />
            <FormInput type="text" label="team size" id="team size" name="team size" />
            <button type="submit">Submit</button>
          </Form>
        </section>
      )}
    </Formik>
  );
};

export default Projects;
