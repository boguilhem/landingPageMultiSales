import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './contato.module.scss';
import Input from '../input';
import Select from '../select';
import Button from '../button';
import { Loading } from '../loading/index';
import { SuccessModal } from '../successModal/index';
import { FailModal } from '../failModal/index';

const Contato = () => {
  const [isLoading, setLoading] = useState(false);
  const [successModal, setModalSuccess] = useState(false);
  const [failModal, setModalFail] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
    },

    validationSchema: Yup.object({
      email: Yup.string().email('Email inválido').required('Campo Obrigatório'),
    }),
    validateOnChange: false,
    validadeOnBlue: false,
    onSubmit: (values) => handleSubmitForm(values),
  });

  const handleSubmitForm = (values) => {
    setLoading(true);
    axios
      .post('/api/sendEmail', {
        messageBody: `Email: ${values.email}`,
      })
      .then(() => {
        formik.resetForm();
        setLoading(false);
        setModalSuccess(true);
      })
      .catch(() => {
        setLoading(false);
        setModalFail(true);
      });
  };

  const closeModal = () => {
    setModalFail(false);
    setModalSuccess(false);
  };

  return (
    <>
      {successModal && <SuccessModal closeModal={closeModal} />}
      {failModal && <FailModal closeModal={closeModal} />}
      {isLoading && <Loading />}
      <div className={styles.container} id="contato">
        <div className={styles.texts}>
          <span>entre em contato</span>
          <h1>Aumente seu resultado de vendas e performance</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna
          </p>
        </div>
        <div className={styles.form}>
          <h1>Comece o seu Free Trial</h1>

          <form id="leadForm" onSubmit={formik.handleSubmit}>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Coloque seu melhor Email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              required
            />

            <Button title="Enviar" kind="full" type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contato;
