import {Router} from 'express';
import UserRoutes from "./User.route";
import CustomerRoutes from "./Customers.route";
import CustomerStatsRoutes from "./CustomerStats.route";
const router = Router();


router.use("/users", UserRoutes);
router.use("/customers", CustomerRoutes);
router.use("/stats", CustomerStatsRoutes);

export default router;