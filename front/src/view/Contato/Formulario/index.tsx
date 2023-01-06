import { Formik } from "formik";

import { ContatoFormularioSection } from "./style";


export default function ContatoFormulario() {
  return (
    <ContatoFormularioSection>
      <Formik
        initialValues={{
          'nome': '',
          'email' : '',
          'assunto' : '',
          'mensagem' : ''
        }}
        validate={values => {
          const errors = { email : '' };
          if ( ! values.email ) {
            errors.email = 'Requerido.';
          }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'E-mail inválido';
          }
          return errors;
        }}
        onSubmit={(values, {setSubmitting}) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form>
            <label>Nome</label>
            <input type="text" placeholder="Nome" name="nome" onChange={handleChange} onBlur={handleBlur} value={values.nome} />
            <label>E-mail</label>
            <input type="email" placeholder="E-mail" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
            <label>Assunto</label>
            <input type="text" placeholder="Assunto" name="assunto" onChange={handleChange} onBlur={handleBlur} value={values.assunto} />
            <label>Mensagem</label>
            <textarea placeholder="Deixe seu mensagem" name="mensagem" onChange={handleChange} onBlur={handleBlur} >{values.mensagem}</textarea>
            <button type="submit" disabled={isSubmitting}>Enviar</button>
          </form>
        )}
      </Formik>
    </ContatoFormularioSection>
  );
}