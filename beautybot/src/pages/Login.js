import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:8000/api/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: formData.username, password: formData.password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        setIsAuthenticated(true);
        alert('Login successful!');
        navigate('/');
      } else {
        setError(data.detail || 'Login failed. Please check your credentials.');
      }
    } catch (err) {
      setError('Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.containerWrapper}>
        <div style={styles.container}>
          <h2 style={styles.title}>Welcome Back!</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <label style={styles.label}>
              Username:
              <input
                name="username"
                value={formData.username}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </label>
            <label style={styles.label}>
              Password:
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </label>
            {error && <p style={styles.error}>{error}</p>}
            {loading ? (
              <p style={styles.loading}>Logging in...</p>
            ) : (
              <button type="submit" style={styles.submitButton}>
                Login
              </button>
            )}
          </form>
          <p style={styles.switchText}>
            Don&apos;t have an account?{' '}
            <span style={styles.switchButton} onClick={() => navigate('/register')}>
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: '#FFF0F5',
    minHeight: '90vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    maxWidth: 480,
    padding: 24,
    borderRadius: 24,
    background: 'linear-gradient(135deg, #FFD1E3 0%, #FCE5F3 100%)',
    boxShadow: '0 10px 25px rgba(255, 168, 212, 0.6)',
    color: '#7B2F74',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 24,
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    fontWeight: '600',
    fontSize: 14,
  },
  input: {
    marginTop: 6,
    padding: '10px 12px',
    borderRadius: 12,
    border: '1.5px solid #F48FB1',
    fontSize: 16,
    outline: 'none',
    boxShadow: 'inset 0 2px 5px #fce9f5',
  },
  submitButton: {
    marginTop: 12,
    backgroundColor: '#E75EAA',
    color: 'white',
    border: 'none',
    borderRadius: 24,
    padding: '12px 0',
    fontWeight: '700',
    fontSize: 18,
    cursor: 'pointer',
    boxShadow: '0 5px 15px rgba(231, 94, 170, 0.7)',
  },
  error: {
    color: '#E63E79',
    fontSize: 14,
    textAlign: 'center',
  },
  loading: {
    fontSize: 14,
    fontWeight: '500',
    color: '#7B2F74',
    textAlign: 'center',
  },
  switchText: {
    marginTop: 16,
    fontSize: 14,
    textAlign: 'center',
    color: '#7B2F74',
  },
  switchButton: {
    color: '#E75EAA',
    fontWeight: '600',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
};

export default Login;
