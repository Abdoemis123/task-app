import React from 'react';

const Task = ({ task, onUpdate, onDelete }) => {
    const handleStatusChange = () => {
        onUpdate({ ...task, status: task.status === 'completed' ? 'active' : 'completed' });
    };

    const handleDelete = () => {
        onDelete(task);
    };

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title" style={{ fontSize: '18px', fontWeight: 'bold' }}>{task.title}</h5>
                <p className="card-text" style={{ fontSize: '14px' }}>{task.description}</p>
                <p className="card-text">
                    <small className="text-muted">{task.dueDate}</small>
                </p>
                <button className="btn btn-sm btn-primary mr-2" onClick={handleStatusChange}>
                    {task.status === 'completed' ? 'Marquer comme Actif' : 'Marquer comme Terminé'}
                </button>
                <button className="btn btn-sm btn-danger" onClick={handleDelete}>
                    Supprimer
                </button>
            </div>
        </div>
    );
};

export default Task;
