import React from "react";

export default function Footer() {
  const data = new Date();
  const ano = data.getFullYear();

  return (
    <div>
      <footer className="py-4 bg-light mt-auto">
        <div className="container-fluid d-flex justify-content-center px-4">
          <div className="d-flex align-items-center justify-content-between small">
            <div className="text-muted fw-bold">
              Copyright &copy; Path Informática {ano}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
