import React from 'react';

export default function Footer() {
  return (
    <footer className="text-center text-lg-start bg-white text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block" />
        <div />
      </section>
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3 text-grayish" />
                Компания
              </h6>
              <p>
                <i className="fas fa-home me-3 text-grayish" />
                {' '}
                best.flats
              </p>
              <p />
            </div>
            <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Связаться с нами</h6>
              <p>
                <i className="fas fa-home me-0 text-grayish" />
                {' '}
                Адрес:
                {' '}
                <a href="https://www.google.ru/" className="btn btn-secondary "> ул. Цветной бульвар дом 2</a>
              </p>
              <p>
                <i className="fas fa-envelope me-0 text-grayish" />
                {' '}
                Почта:
                {' '}
                <a href="mailto:best.flats@mail.ru" className="btn btn-secondary ">best.flats@mail.ru</a>
              </p>
              <p>
                <i className="fas fa-phone me-0 text-grayish" />
                {' '}
                Телефон:
                {' '}
                <a href="tel:+74999386824" className="footer-module--telLink--X0ICB btn btn-secondary "> +7 499 938-68-24</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
