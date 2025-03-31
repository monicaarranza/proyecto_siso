import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AccessPage = () => {
  return (
    <div className="access-container" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <Card className="shadow-lg border-0 text-center" style={{
              borderRadius: '10px',
              padding: '40px',
              background: 'white'
            }}>
              <h3 className="mb-4" style={{ color: '#6a11cb', fontWeight: 'bold' }}>Selecciona una opción</h3>
              <div className="d-grid gap-4">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="py-5 border-0"
                  style={{
                    background: 'linear-gradient(to right, #6a11cb 0%, #2575fc 100%)',
                    borderRadius: '0px', 
                    fontWeight: 'bold',
                    fontSize: '24px',
                    letterSpacing: '1px',
                    boxShadow: '0 4px 15px rgba(106, 17, 203, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => window.location.href = 'moodle'} // Cambiar por Moodle
                  onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  Moodle
                </Button>

                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="py-5 border-0"
                  style={{
                    background: 'linear-gradient(to right, #6a11cb 0%, #2575fc 100%)',
                    borderRadius: '0px', 
                    fontWeight: 'bold',
                    fontSize: '24px',
                    letterSpacing: '1px',
                    boxShadow: '0 4px 15px rgba(106, 17, 203, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => window.location.href = 'email'} // Cambiar por correo
                  onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  Email
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AccessPage;
