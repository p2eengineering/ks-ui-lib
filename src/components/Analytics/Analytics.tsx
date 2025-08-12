import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FaChartBar, FaChartLine, FaChartPie } from 'react-icons/fa';
import './Analytics.scss';

const Analytics: React.FC = () => {
  return (
    <div className="analytics">
      <div className="analytics-header mb-4">
        <h2>Analytics</h2>
        <p className="text-muted">Performance metrics and insights</p>
      </div>

      <Row>
        <Col lg={6} className="mb-4">
          <Card>
            <Card.Header>
              <h5 className="mb-0">
                <FaChartLine className="me-2" />
                Transaction Volume
              </h5>
            </Card.Header>
            <Card.Body>
              <div className="chart-placeholder">
                <FaChartLine size={48} className="text-muted mb-3" />
                <h5>Transaction Volume Chart</h5>
                <p className="text-muted">Chart showing transaction volume over time</p>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6} className="mb-4">
          <Card>
            <Card.Header>
              <h5 className="mb-0">
                <FaChartPie className="me-2" />
                Wallet Distribution
              </h5>
            </Card.Header>
            <Card.Body>
              <div className="chart-placeholder">
                <FaChartPie size={48} className="text-muted mb-3" />
                <h5>Wallet Distribution Chart</h5>
                <p className="text-muted">Pie chart showing wallet type distribution</p>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={12}>
          <Card>
            <Card.Header>
              <h5 className="mb-0">
                <FaChartBar className="me-2" />
                Performance Metrics
              </h5>
            </Card.Header>
            <Card.Body>
              <div className="chart-placeholder">
                <FaChartBar size={48} className="text-muted mb-3" />
                <h5>Performance Metrics Dashboard</h5>
                <p className="text-muted">Comprehensive analytics dashboard</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Analytics;
