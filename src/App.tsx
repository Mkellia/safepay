import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import BuyerDashboard from "./pages/BuyerDashboard";
import BuyerDisputes from "./pages/BuyerDisputes";
import SellerDashboard from "./pages/SellerDashboard";
import SellerOrderDetail from "./pages/SellerOrderDetail";
import CreateNewOrder from "./pages/CreateNewOrder";
import MakePayment from "./pages/MakePayment";
import ConfirmDelivery from "./pages/ConfirmDelivery";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
        <Route path="/buyer/disputes" element={<BuyerDisputes />} />

        <Route path="/seller/dashboard" element={<SellerDashboard />} />
        <Route path="/seller/orders/:orderId" element={<SellerOrderDetail />} />

        <Route path="/orders/new" element={<CreateNewOrder />} />
        <Route path="/payments/:orderId" element={<MakePayment />} />
        <Route path="/orders/:orderId/confirm-delivery" element={<ConfirmDelivery />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
