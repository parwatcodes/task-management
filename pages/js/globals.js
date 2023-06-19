import { login } from './login.js';
import { goto } from '../../helpers/utils.js';
import { generatePassword } from './add-user.js';
import { showToast, hideToast } from './toast.js'
import { loadTask } from './dashboard.js'
import { isAuthenticated } from '../../helpers/validators.js';
import { isAdmin, getMembers, groupTaskByListName, addTask, addUser, updateTask, logout, getTaskById } from '../../helpers/api.js'

window.goto = goto;
window.login = login;
window.logout = logout;
window.addTask = addTask;
window.addUser = addUser;
window.isAdmin = isAdmin;
window.loadTask = loadTask;
window.showToast = showToast;
window.hideToast = hideToast;
window.updateTask = updateTask;
window.getMembers = getMembers;
window.getTaskById = getTaskById;
window.isAuthenticated = isAuthenticated;
window.generatePassword = generatePassword;
window.groupTaskByListName = groupTaskByListName;
