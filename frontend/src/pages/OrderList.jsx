import React, { useEffect, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import { 
  Package, 
  User, 
  Clock, 
  Truck, 
  CheckCircle, 
  BarChart3,
  Zap,
  Bell,
  RefreshCw,
  TrendingUp,
  ShoppingCart,
  Activity,
  Star,
  Calendar,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

const socket = io("http://localhost:5000"); // backend server

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  useEffect(() => {
    loadOrders();

    // listen for real-time updates
    socket.on("orderUpdate", () => {
      loadOrders();
      setLastUpdate(new Date());
    });

    return () => {
      socket.off("orderUpdate");
    };
  }, []);

  const loadOrders = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get("http://localhost:5000/api/orders");
      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusConfig = (status) => {
    switch (status) {
      case "pending":
        return {
          bg: "bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-500",
          icon: Clock,
          textColor: "text-amber-700",
          bgLight: "bg-amber-50",
          borderColor: "border-amber-200",
          glowColor: "shadow-amber-500/30"
        };
      case "shipped":
        return {
          bg: "bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-600",
          icon: Truck,
          textColor: "text-blue-700",
          bgLight: "bg-blue-50",
          borderColor: "border-blue-200",
          glowColor: "shadow-blue-500/30"
        };
      default:
        return {
          bg: "bg-gradient-to-r from-emerald-500 via-green-500 to-teal-600",
          icon: CheckCircle,
          textColor: "text-green-700",
          bgLight: "bg-green-50",
          borderColor: "border-green-200",
          glowColor: "shadow-green-500/30"
        };
    }
  };

  const getOrderCardAnimation = (index) => {
    return {
      animationDelay: `${index * 150}ms`
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="relative z-10 p-4 sm:p-6 lg:p-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
        
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-slate-800 via-indigo-600 to-purple-700 bg-clip-text text-transparent mb-6 tracking-tight">
            Orders Hub
          </h1>
          
          <p className="text-slate-600 text-xl sm:text-2xl max-w-3xl mx-auto mb-8 font-medium">
            Real-time order monitoring with intelligent notifications
          </p>
          
          {/* Live Status Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center bg-white/80 backdrop-blur-lg rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
              <Activity className="w-5 h-5 text-green-500 mr-3 animate-pulse" />
              <span className="text-sm font-semibold text-slate-700">System Online</span>
            </div>
            
            <div className="flex items-center bg-white/80 backdrop-blur-lg rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
              <RefreshCw className="w-4 h-4 text-blue-500 mr-2 animate-spin" />
              <span className="text-sm font-medium text-slate-600">
                Last updated: {lastUpdate.toLocaleTimeString()}
              </span>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex flex-col justify-center items-center py-20">
            <div className="relative mb-8">
              <div className="w-20 h-20 border-4 border-slate-200 border-t-indigo-500 rounded-full animate-spin"></div>
              <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-purple-500 rounded-full animate-spin animation-delay-300"></div>
              <Package className="absolute inset-0 m-auto w-8 h-8 text-indigo-600" />
            </div>
            <p className="text-slate-600 font-medium text-lg">Loading your orders...</p>
          </div>
        )}

        {/* Orders Grid */}
        {!isLoading && (
          <>
            {/* Enhanced Stats Dashboard */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 group hover:-translate-y-2">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="text-slate-600 text-xs font-semibold mb-1">Total Orders</p>
                  <p className="text-2xl font-black text-slate-800">{orders.length}</p>
                  <p className="text-green-600 text-xs font-medium mt-1">↑ Active</p>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 group hover:-translate-y-2">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <Bell className="w-5 h-5 text-amber-500 animate-pulse" />
                </div>
                <div>
                  <p className="text-slate-600 text-xs font-semibold mb-1">Pending</p>
                  <p className="text-2xl font-black text-slate-800">
                    {orders.filter(order => order.status === 'pending').length}
                  </p>
                  <p className="text-amber-600 text-xs font-medium mt-1">⏳ Processing</p>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 group hover:-translate-y-2">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <MapPin className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-slate-600 text-xs font-semibold mb-1">Shipped</p>
                  <p className="text-2xl font-black text-slate-800">
                    {orders.filter(order => order.status === 'shipped').length}
                  </p>
                  <p className="text-blue-600 text-xs font-medium mt-1">🚚 In Transit</p>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 group hover:-translate-y-2">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <Star className="w-5 h-5 text-yellow-500" />
                </div>
                <div>
                  <p className="text-slate-600 text-xs font-semibold mb-1">Delivered</p>
                  <p className="text-2xl font-black text-slate-800">
                    {orders.filter(order => order.status === 'delivered').length}
                  </p>
                  <p className="text-green-600 text-xs font-medium mt-1">✅ Complete</p>
                </div>
              </div>
            </div>

            {/* Compact Notification Cards */}
            <div className="grid gap-4 sm:gap-5 lg:grid-cols-2 xl:grid-cols-3">
              {orders.map((order, index) => {
                const statusConfig = getStatusConfig(order.status);
                const StatusIcon = statusConfig.icon;
                
                return (
                  <div
                    key={order._id}
                    className="group bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 border border-white/50 overflow-hidden opacity-0 animate-fade-in-up hover:scale-[1.02]"
                    style={getOrderCardAnimation(index)}
                  >
                    {/* Compact Header */}
                    <div className={`${statusConfig.bg} p-4 relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                      <div className="relative z-10 flex items-center justify-between text-white">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-white/20 backdrop-blur-sm rounded-xl">
                            <User className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="font-bold text-sm">{order.customer_name}</p>
                            <p className="text-white/80 text-xs font-medium">Customer</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                          <StatusIcon className="w-3 h-3" />
                          <span className="font-semibold capitalize text-xs">{order.status}</span>
                        </div>
                      </div>
                    </div>

                    {/* Compact Content */}
                    <div className="p-4">
                      {/* Product Section */}
                      <div className="flex items-start space-x-3 mb-4">
                        <div className={`p-2 ${statusConfig.bgLight} rounded-xl shadow-sm`}>
                          <Package className={`w-4 h-4 ${statusConfig.textColor}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-slate-600 text-xs font-semibold mb-1 flex items-center">
                            <ShoppingCart className="w-3 h-3 mr-1" />
                            Product
                          </p>
                          <p className="text-slate-800 font-bold text-sm leading-tight group-hover:text-indigo-600 transition-colors duration-300 truncate">
                            {order.product_name}
                          </p>
                        </div>
                      </div>

                      {/* Progress Section */}
                      <div className="mb-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-slate-600 text-xs font-semibold">Progress</span>
                          <span className="text-slate-500 text-xs font-medium">
                            {order.status === 'pending' ? '33%' : 
                             order.status === 'shipped' ? '66%' : '100%'}
                          </span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden shadow-inner">
                          <div 
                            className={`h-2 rounded-full transition-all duration-1000 ease-out ${statusConfig.bg} shadow-sm`}
                            style={{
                              width: order.status === 'pending' ? '33%' : 
                                    order.status === 'shipped' ? '66%' : '100%'
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Compact Empty State */}
            {orders.length === 0 && (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center p-8 bg-white/80 backdrop-blur-lg rounded-full shadow-xl mb-6 hover:shadow-2xl transition-all duration-500">
                  <Package className="w-12 h-12 text-slate-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">No Orders Available</h3>
                <p className="text-slate-600 max-w-lg mx-auto text-base leading-relaxed mb-6">
                  Your order notifications will appear here in real-time. The system is actively monitoring for new orders.
                </p>
                <div className="flex items-center justify-center space-x-2 text-green-600">
                  <Activity className="w-4 h-4 animate-pulse" />
                  <span className="font-semibold text-sm">System Ready & Monitoring</span>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Custom CSS for enhanced animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-bounce,
          .animate-pulse,
          .animate-spin {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default OrderList;