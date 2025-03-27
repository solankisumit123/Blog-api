const Comment = require('../models/Comment');

exports.addComment = async (req, res) => {
    try {
        const { content, blogId } = req.body;
        const comment = new Comment({ content, blog: blogId, user: req.userId });
        await comment.save();
        res.status(201).json(comment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// view comments
exports.viewComment = async (req, res) => {
    try {
        const comments = await Comment.find({ blog: req.params.blogId }).populate('user', 'name');
        res.json(comments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// update comment

exports.updateComment = async (req, res) => {
    try {
        const comment = await Comment.findByIdAndUpdate(req.params.commentId, req.body, { new: true });
        if (!comment) return res.status(404).json({ message: 'Comment not found' });
        res.json(comment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// delete comment

exports.deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.commentId);
        if (!comment) return res.status(404).json({ message: 'Comment not found' });
        res.json({ message: 'Comment deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};