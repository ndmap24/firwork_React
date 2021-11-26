import './App.css';
import React, { Router } from 'react-router-dom';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import Login from './pages/Login';
import LoginHeader from './pages/LoginHeader';
import Header from './pages/header';
import MainInterface from './pages/MainInterface';
import CardCollection from './pages/CardCollection';
import CardSynthesis from './pages/CardSynthesis';
import Starship from './pages/Starship';
import StarshipEquipment from './pages/StarshipEquipment';
import StarshipUpgrade from './pages/StarshipUpgrade';
import StarshipMining from './pages/StarshipMining';
import HighRiskMining from './pages/HighRiskMining';
import InterstellarTraderTreasured from './pages/InterstellarTraderTreasured';
import InterstellarTraderClassical from './pages/InterstellarTraderClassical';
import InterstellarTraderCamp from './pages/InterstellarTraderCamp';
import CardShop from './pages/CardShop';
import ConfirmGoods from './pages/ConfirmGoods';
import OpenPackage from './pages/OpenPackage';
import Swiper from './pages/Swiper';
import TreasueredPack from './pages/TreasueredPack';
import CampPack from './pages/CampPack';
import { connect } from 'react-redux';
import { getPacks } from './actions/getPack';
import { boughtPacksa } from './actions/selectPack';
import Storage from "./pages/Storage";
import BuyUsdtButton from "./pages/BuyUsdtButton";

function App({ getPacks, boughtPacksa }) {

  useEffect(() => {

    getPacks()
    boughtPacksa()

  }, [])

  return (
    <div className="App" >
    <BrowserRouter>
      <Switch>
        <Route exact path="/" >
          <Login />
        </Route>
        <Router path="/login-header" >
            <LoginHeader />
            </Router> <Route path="/header" >
              <Header />
              </Route> <Route path="/tech-center" >
                <MainInterface />
                </Route> <Route path="/card-collection-interface" >
                  <CardCollection />
                  </Route> <Route path="/card-synthesis" >
                    <CardSynthesis />
                    </Route> <Route path="/startship" >
                      <Starship />
                      </Route> <Route path="/starship_equipment" >
                        <StarshipEquipment />
                        </Route> <Route path="/starship_upgrade" >
                          <StarshipUpgrade />
                          </Route> <Route path="/starship_mining" >
                            <StarshipMining />
                            </Route> <Route path="/high_risk_mining" >
                              <HighRiskMining />
                              </Route> <Route path="/interstellar_trader_treasured" >
                                <InterstellarTraderTreasured />
                                </Route> <Route path="/interstellar_trader_classical" >
                                  <InterstellarTraderClassical />
                                  </Route> <Route path="/interstellar_trader_camp" >
                                    <InterstellarTraderCamp />
                                    </Route> <Route path="/card_shop" >
                                      <CardShop />
                                      </Route> <Route path="/confirm_goods" >
                                        <ConfirmGoods />
                                        </Route> {
                                          /* <Route path="/confirm_goods/package_2">
                                                      <ConfirmGoods value_id = {2} value_price = {20} value_offer = {`Package 2 get`}/>
                                                    </Route>
                                                    <Route path="/confirm_goods/package_6">
                                                      <ConfirmGoods value_id = {6} value_price = {60} value_offer = {`Package 6 get`} />
                                                    </Route>
                                                    <Route path="/confirm_goods/package_11">
                                                      <ConfirmGoods value_id = {11} value_price = {100} value_offer = {`Exclusive Package 10 get 1 free`}/>
                                                    </Route>
                                                    <Route path="/confirm_goods/package_22">
                                                      <ConfirmGoods value_id = {22} value_price = {200} value_offer = {`Supreme Package 20 get 2 free`}/>
                                                    </Route> */
                                        } <Route path="/open_package" >
                                          <OpenPackage />
                                          </Route> 
                                          <Route path="/swiper" >
                                            <Swiper />
                                            </Route> 
                                            <Route path="/treasuered-pack" >
                                              <TreasueredPack />
                                            </Route> 
                                            <Route path="/camp-pack" >
                                                <CampPack />
                                            </Route>
                                                </Switch> 
                                            <Route path="/storage">
                                                  < Storage />
                                                  </Route>
                                                  <Route path="/buy-usdt" >
                                                  <BuyUsdtButton />
                                                  </Route>
                                                   </BrowserRouter> </div>

                                                  );
}
export default connect(null, {getPacks, boughtPacksa})(App);