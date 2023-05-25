import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import TaskList from './TaskList';
import AddTask from './AddTask';
import './App.css';


const App = () => {
    const [tasks, setTasks] = useState([]);
    const [showTasks, setShowTasks] = useState(false);

    const handleAddTask = (task) => {
        setTasks([...tasks, { id: Date.now(), ...task }]);
    };

    const handleUpdateTask = (updatedTask) => {
        setTasks(
            tasks.map((task) => {
                if (task.id === updatedTask.id) {
                    return updatedTask;
                }
                return task;
            })
        );
    };

    const handleDeleteTask = (taskToDelete) => {
        setTasks(tasks.filter((task) => task.id !== taskToDelete.id));
    };

    const handleShowTasks = () => {
        setShowTasks(true);
    };

    const handleShowAddTask = () => {
        setShowTasks(false);
    };

    return (
        <div>
            <Navbar color="primary" dark expand="md">
                <NavbarBrand href="/">Gestionnaire de tâches</NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="#" onClick={handleShowAddTask}>
                            Accueil
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" onClick={handleShowTasks}>
                            Tâches
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
            <Container className="mt-3">
                {showTasks ? (
                    <TaskList tasks={tasks} onUpdate={handleUpdateTask} onDelete={handleDeleteTask} />
                ) : (
                    <AddTask onAdd={handleAddTask} />
                )}
            </Container>
        </div>
    );
};

export default App;
