import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { FaWallet, FaShieldAlt, FaUsers, FaChartLine, FaExchangeAlt } from 'react-icons/fa';
import './Dashboard.scss';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Wallets',
      value: '12',
      icon: FaWallet,
      color: '#667eea',
      change: '+2 this month'
    },
    {
      title: 'Custodial Wallets',
      value: '5',
      icon: FaShieldAlt,
      color: '#28a745',
      change: '+1 this month'
    },
    {
      title: 'Self-Custodial',
      value: '4',
      icon: FaWallet,
      color: '#ffc107',
      change: '+1 this month'
    },
    {
      title: 'MPC Wallets',
      value: '3',
      icon: FaUsers,
      color: '#dc3545',
      change: 'No change'
    }
  ];

  const recentTransactions = [
    { id: 1, type: 'Transfer', amount: '0.5 ETH', status: 'Completed', time: '2 hours ago' },
    { id: 2, type: 'Swap', amount: '1000 USDC', status: 'Pending', time: '4 hours ago' },
    { id: 3, type: 'Stake', amount: '500 DAI', status: 'Completed', time: '1 day ago' },
    { id: 4, type: 'Transfer', amount: '0.1 BTC', status: 'Failed', time: '2 days ago' }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header mb-4">
        <h2>Dashboard</h2>
        <p className="text-muted">Overview of your wallet configurations and activity</p>
      </div>

      {/* Stats Cards */}
      <Row className="mb-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Col key={index} lg={3} md={6} className="mb-3">
              <Card className="stat-card">
                <Card.Body>
                  <div className="d-flex align-items-center">
                    <div className="stat-icon" style={{ backgroundColor: stat.color }}>
                      <Icon />
                    </div>
                    <div className="stat-content">
                      <h3 className="stat-value">{stat.value}</h3>
                      <p className="stat-title">{stat.title}</p>
                      <small className="stat-change">{stat.change}</small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>

      {/* Charts and Activity */}
      <Row>
        <Col lg={8} className="mb-4">
          <Card>
            <Card.Header>
              <h5 className="mb-0">
                <FaChartLine className="me-2" />
                Transaction Activity
              </h5>
            </Card.Header>
            <Card.Body>
              <div className="chart-placeholder">
                <div className="chart-content">
                  <FaChartLine size={48} className="text-muted mb-3" />
                  <h5>Transaction Chart</h5>
                  <p className="text-muted">Chart showing transaction volume over time</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} className="mb-4">
          <Card>
            <Card.Header>
              <h5 className="mb-0">
                <FaExchangeAlt className="me-2" />
                Recent Transactions
              </h5>
            </Card.Header>
            <Card.Body>
              <div className="transaction-list">
                {recentTransactions.map((tx) => (
                  <div key={tx.id} className="transaction-item">
                    <div className="transaction-info">
                      <div className="transaction-type">{tx.type}</div>
                      <div className="transaction-amount">{tx.amount}</div>
                    </div>
                    <div className="transaction-meta">
                      <span className={`status status-${tx.status.toLowerCase()}`}>
                        {tx.status}
                      </span>
                      <small className="transaction-time">{tx.time}</small>
                    </div>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Quick Actions */}
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <h5 className="mb-0">Quick Actions</h5>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={3} className="mb-3">
                  <div className="quick-action">
                    <FaWallet className="quick-action-icon" />
                    <h6>Create New Wallet</h6>
                    <p className="text-muted">Set up a new wallet configuration</p>
                  </div>
                </Col>
                <Col md={3} className="mb-3">
                  <div className="quick-action">
                    <FaShieldAlt className="quick-action-icon" />
                    <h6>Security Settings</h6>
                    <p className="text-muted">Configure security parameters</p>
                  </div>
                </Col>
                <Col md={3} className="mb-3">
                  <div className="quick-action">
                    <FaUsers className="quick-action-icon" />
                    <h6>MPC Setup</h6>
                    <p className="text-muted">Configure multi-party computation</p>
                  </div>
                </Col>
                <Col md={3} className="mb-3">
                  <div className="quick-action">
                    <FaExchangeAlt className="quick-action-icon" />
                    <h6>Gasless Setup</h6>
                    <p className="text-muted">Configure gasless transactions</p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
