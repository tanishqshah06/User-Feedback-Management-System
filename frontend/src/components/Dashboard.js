import React, { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
  Grid,
  Chip,
} from '@mui/material';
import axios from 'axios';

const Dashboard = () => {
  const [feedback, setFeedback] = useState([]);
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchFeedback();
  }, [category, sortBy]);

  const fetchFeedback = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/feedback', {
        params: {
          category: category === 'all' ? undefined : category,
          sortBy,
        },
      });
      setFeedback(response.data);
      setError('');
    } catch (err) {
      setError('Error fetching feedback');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'suggestion':
        return 'primary';
      case 'bug':
        return 'error';
      case 'feature':
        return 'success';
      default:
        return 'default';
    }
  };

  return (
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Feedback Dashboard
        </Typography>

        <Box sx={{ mb: 4, display: 'flex', gap: 2 }}>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Category</InputLabel>
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              label="Category"
            >
              <MenuItem value="all">All Categories</MenuItem>
              <MenuItem value="suggestion">Suggestions</MenuItem>
              <MenuItem value="bug">Bug Reports</MenuItem>
              <MenuItem value="feature">Feature Requests</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Sort By</InputLabel>
            <Select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              label="Sort By"
            >
              <MenuItem value="newest">Newest First</MenuItem>
              <MenuItem value="oldest">Oldest First</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {error && (
          <Typography color="error" align="center">
            {error}
          </Typography>
        )}

        {loading ? (
          <Typography align="center">Loading...</Typography>
        ) : (
          <Grid container spacing={3}>
            {feedback.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item._id}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {item.name}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                      {item.email}
                    </Typography>
                    <Chip
                      label={item.category}
                      color={getCategoryColor(item.category)}
                      size="small"
                      sx={{ mb: 1 }}
                    />
                    <Typography variant="body2">{item.feedback}</Typography>
                    <Typography variant="caption" color="textSecondary">
                      {new Date(item.createdAt).toLocaleString()}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Paper>
    </Container>
  );
};

export default Dashboard; 