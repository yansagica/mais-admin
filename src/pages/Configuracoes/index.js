import React from "react";

function Configuracoes() {
  return (
    <>
      <div className="sb-nav-fixed">
        <Header />
        <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
            <Sidebar />
          </div>
          <div className="bg-light" id="layoutSidenav_content">
            <main>
              <div className="container-fluid px-4">
                <h3 className="mt-4 mb-4 fw-bold texto-roxo">
                  Inadimplência por Turma
                </h3>
                <hr />
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-lg-3 col-xl-2">
                      <select
                        className="form-select form-select-lg mb-3"
                        aria-label="form-select-lg example"
                        value={anoPeriodo}
                        onChange={(e) => setAnoPeriodo(e.target.value)}
                      >
                        <option value="">...</option>
                        {periodos.map((p, index) => (
                          <option key={index} value={p.ano + "/" + p.seqano}>
                            {p.ano}/{p.seqano}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-12 col-lg-9 col-xl-10">
                      <select
                        className="form-select form-select-lg mb-3"
                        aria-label="form-select-lg example"
                        value={turma}
                        onChange={(e) => setTurma(e.target.value)}
                      >
                        <option value="">...</option>
                        {turmas.map((t, index) => (
                          <option key={index} value={t.turma}>
                            {t.turma}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 col-xl-5">
                      <div className="card bg-c-light order-card">
                        <div className="card-block">
                          {faturamento && <Pizza chartData={faturamento} />}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xl-7">
                      <div className="card bg-c-green order-card altura-card">
                        <div className="card-block">
                          <h5 className="m-b-20 fw-bold text-center">
                            Faturamento
                          </h5>
                          <div className="d-flex align-items-center justify-content-around">
                            <span className="h1 fw-bold">
                              {faturaCard.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                              })}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="card bg-c-red order-card altura-card">
                        <div className="card-block">
                          <h5 className="m-b-20 fw-bold text-center">
                            Inadimplência
                          </h5>
                          <div className="d-flex align-items-center justify-content-around">
                            <span className="h1 fw-bold">
                              {inadim.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                              })}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Configuracoes;
