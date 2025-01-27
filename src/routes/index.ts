import {Router} from 'express';
import UserRoutes from "./User.route";
import CustomerRoutes from "./Customers.route";
import CustomerStatsRoutes from "./CustomerStats.route";
import LoginRoute from "./auth.route";
const router = Router();


router.use("/users", UserRoutes);
router.use("/customers", CustomerRoutes);
router.use("/stats", CustomerStatsRoutes);
router.use("/login", LoginRoute);

export default router;