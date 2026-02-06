const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 100;

const userRequests = new Map();

function rateLimit(req, res, next) {
  const userId = req.user.userId;
  const now = Date.now();

  const record = userRequests.get(userId);

  if (!record) {
    userRequests.set(userId, { count: 1, startTime: now });
    return next();
  }

  if (now - record.startTime > WINDOW_MS) {
    // reset window
    userRequests.set(userId, { count: 1, startTime: now });
    return next();
  }

  if (record.count >= MAX_REQUESTS) {
    return res.status(429).json({
      error: "Rate limit exceeded. Try again later.",
    });
  }

  record.count += 1;
  next();
}

module.exports = rateLimit;
