import React from 'react';
import { Card, Table, Badge, Form, Row, Col } from 'react-bootstrap';
import { FaSearch, FaFilter, FaDownload } from 'react-icons/fa';
import './Transactions.scss';

const Transactions: React.FC = () => {
  const transactions = [
    {
      id: 'TX001',
      type: 'Transfer',
      from: '0x1234...5678',
      to: '0x8765...4321',
      amount: '0.5 ETH',
      gasUsed: '21,000',
      status: 'Completed',
      timestamp: '2024-01-15 14:30:00',
      network: 'Ethereum'
    },
    {
      id: 'TX002',
      type: 'Swap',
      from: '0x1234...5678',
      to: '0x8765...4321',
      amount: '1000 USDC',
      gasUsed: '150,000',
      status: 'Pending',
      timestamp: '2024-01-15 13:45:00',
      network: 'Polygon'
    },
    {
      id: 'TX003',
      type: 'Stake',
      from: '0x1234...5678',
      to: '0x8765...4321',
      amount: '500 DAI',
      gasUsed: '80,000',
      status: 'Completed',
      timestamp: '2024-01-15 12:20:00',
      network: 'Ethereum'
    },
    {
      id: 'TX004',
      type: 'Transfer',
      from: '0x1234...5678',
      to: '0x8765...4321',
      amount: '0.1 BTC',
      gasUsed: '0',
      status: 'Failed',
      timestamp: '2024-01-15 11:15:00',
      network: 'Bitcoin'
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants: { [key: string]: string } = {
      'Completed': 'success',
      'Pending': 'warning',
      'Failed': 'danger'
    };
    return <Badge bg={variants[status] || 'secondary'}>{status}</Badge>;
  };

  return (
    <div className="transactions">
      <div className="transactions-header mb-4">
        <h2>Transaction History</h2>
        <p className="text-muted">View and manage your transaction history</p>
      </div>

      {/* Filters */}
      <Card className="mb-4">
        <Card.Body>
          <Row>
            <Col md={3}>
              <Form.Group>
                <Form.Label>Search</Form.Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaSearch />
                  </span>
                  <Form.Control placeholder="Search transactions..." />
                </div>
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group>
                <Form.Label>Status</Form.Label>
                <Form.Select>
                  <option value="">All Status</option>
                  <option value="completed">Completed</option>
                  <option value="pending">Pending</option>
                  <option value="failed">Failed</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group>
                <Form.Label>Network</Form.Label>
                <Form.Select>
                  <option value="">All Networks</option>
                  <option value="ethereum">Ethereum</option>
                  <option value="polygon">Polygon</option>
                  <option value="bitcoin">Bitcoin</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group>
                <Form.Label>Date Range</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Col>
          </Row>
          <div className="d-flex justify-content-end mt-3">
            <button className="btn btn-outline-primary me-2">
              <FaFilter className="me-2" />
              Apply Filters
            </button>
            <button className="btn btn-outline-secondary">
              <FaDownload className="me-2" />
              Export
            </button>
          </div>
        </Card.Body>
      </Card>

      {/* Transactions Table */}
      <Card>
        <Card.Header>
          <h5 className="mb-0">Recent Transactions</h5>
        </Card.Header>
        <Card.Body>
          <Table responsive hover>
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Type</th>
                <th>From</th>
                <th>To</th>
                <th>Amount</th>
                <th>Gas Used</th>
                <th>Network</th>
                <th>Status</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id}>
                  <td>
                    <code>{tx.id}</code>
                  </td>
                  <td>
                    <Badge bg="info">{tx.type}</Badge>
                  </td>
                  <td>
                    <code>{tx.from}</code>
                  </td>
                  <td>
                    <code>{tx.to}</code>
                  </td>
                  <td>
                    <strong>{tx.amount}</strong>
                  </td>
                  <td>{tx.gasUsed}</td>
                  <td>
                    <Badge bg="secondary">{tx.network}</Badge>
                  </td>
                  <td>{getStatusBadge(tx.status)}</td>
                  <td>{tx.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Transactions;
