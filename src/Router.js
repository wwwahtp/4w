import { Route, Routes } from 'react-router-dom';
import App from './App';
import { Detail } from './detail';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App></App>}></Route>
      <Route path="/Detail" element={<Detail></Detail>}></Route>
    </Routes>
  );
};
export default Router;
