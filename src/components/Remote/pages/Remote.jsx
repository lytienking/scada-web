import './Remote.scss';
import { Formik } from 'formik';
const Remote = () => {
  return (
    <>
      <h1 className="title">Điều khiển</h1>
      <div className="container-remote">
        <Formik
          initialValues={{ temp: '', hum: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.temp) {
              errors.temp = 'Bắt buộc nhập';
            }
            if (!values.hum) {
              errors.hum = 'Bắt buộc nhập';
            }
            if (values.temp < 15 || values.temp > 40) {
              errors.temp = 'Vui lòng nhập trong khoảng quy định';
            }
            if (values.hum < 70 || values.hum > 90) {
              errors.hum = 'Vui lòng nhập trong khoảng quy định';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <div className="remote1">
              <h2>Điều khiển 1</h2>
              <form onSubmit={handleSubmit}>
                <div className="user-box">
                  <label>Nhiệt độ (15-40)</label>
                  <input type="text" name="temp" onChange={handleChange} onBlur={handleBlur} value={values.temp} />
                  <span>{errors.temp && touched.temp && errors.temp}</span>
                </div>

                <div className="user-box">
                  <label>Độ ẩm (70-90)</label>
                  <input type="text" name="hum" onChange={handleChange} onBlur={handleBlur} value={values.hum} />
                  <span>{errors.hum && touched.hum && errors.hum}</span>
                </div>

                <button type="submit" disabled={isSubmitting}>
                  Xác nhận
                </button>
              </form>
            </div>
          )}
        </Formik>
        <div className="bulkhead"></div>
        <Formik
          initialValues={{ yellow: '', red: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.yellow) {
              errors.yellow = 'Bắt buộc nhập';
            }
            if (!values.red) {
              errors.red = 'Bắt buộc nhập';
            }
            if (values.yellow < 5 || values.yellow > 20) {
              errors.yellow = 'Vui lòng nhập trong khoảng quy định';
            }
            if (values.red < 1 || values.red > 5) {
              errors.red = 'Vui lòng nhập trong khoảng quy định';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <div className="remote2">
              <h2>Điều khiển 2</h2>
              <form onSubmit={handleSubmit}>
                <div className="user-box">
                  <label>Nhiệt độ (5-20)</label>
                  <input type="text" name="yellow" onChange={handleChange} onBlur={handleBlur} value={values.yellow} />
                  <span>{errors.yellow && touched.yellow && errors.yellow}</span>
                </div>

                <div className="user-box">
                  <label>Độ ẩm (1-5)</label>
                  <input type="text" name="red" onChange={handleChange} onBlur={handleBlur} value={values.red} />
                  <span>{errors.red && touched.red && errors.red}</span>
                </div>

                <button type="submit" disabled={isSubmitting}>
                  Xác nhận
                </button>
              </form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Remote;
