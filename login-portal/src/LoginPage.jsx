import React from 'react';
import { Container, Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const LoginPage = () => {
  return (
    <div className="login-container" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6} xl={5}>
            <Card className="shadow-lg border-0" style={{
              borderRadius: '15px',
              overflow: 'hidden',
              border: 'none'
            }}>
              <div style={{
                background: 'linear-gradient(to right, #6a11cb 0%, #2575fc 100%)',
                padding: '20px',
                textAlign: 'center'
              }}>
                <Image 
                  src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png" 
                  width="80"
                  className="mb-3"
                />
                <h4 className="text-white mb-0">Bienvenido</h4>
                <p className="text-white-50 mb-0">Ingresa a tu cuenta</p>
              </div>
              
              <Card.Body className="p-4 p-md-5">
                <Form>
                  <Form.Group className="mb-4">
                    <Form.Label className="small text-uppercase text-muted">Usuario</Form.Label>
                    <div className="input-group">
                      <span className="input-group-text bg-transparent">
                        <i className="bi bi-person"></i>
                      </span>
                      <Form.Control 
                        type="text" 
                        placeholder="ingresa tu usuario" 
                        className="py-3 border-start-0"
                        style={{borderLeft: 'none'}}
                      />
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="small text-uppercase text-muted">Contraseña</Form.Label>
                    <div className="input-group">
                      <span className="input-group-text bg-transparent">
                        <i className="bi bi-lock"></i>
                      </span>
                      <Form.Control 
                        type="password" 
                        placeholder="••••••••" 
                        className="py-3 border-start-0"
                      />
                    </div>
                  </Form.Group>

                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="w-100 py-3 mt-3 border-0"
                    style={{
                      background: 'linear-gradient(to right, #6a11cb 0%, #2575fc 100%)',
                      borderRadius: '50px',
                      fontWeight: '600',
                      letterSpacing: '1px',
                      boxShadow: '0 4px 15px rgba(106, 17, 203, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                  >
                    INGRESAR
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;