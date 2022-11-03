import React from 'react';
import styles from './../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.text}>Designed & Developed by Abdullah Mokbl</div>
      <div className={styles.icons}>
        <a href='https://eg.linkedin.com/in/abdullah-mokbl-8667a8ba'>
          <svg viewBox="0 0 24 24" >
            <path d="M7.53439798,19.9999996 L7.53439798,9.56759745 L4.32438473,9.56759745 L4.32438473,19.9999996 L7.53439798,19.9999996 L7.53439798,19.9999996 Z M12.7713547,20 L9.54495313,20 C9.54495313,20 9.59135892,10.503372 9.54495313,9.50464178 L12.7710411,9.50464178 L12.7478383,10.899932 C13.2109556,10.1736399 14.0450059,9.1065638 15.9451357,9.1065638 C18.2626042,9.1065638 20,10.6278087 20,13.8970679 L20,20 L16.7683223,19.9999999 L16.7683223,14.0561214 C16.7683223,12.6255842 15.9689657,11.8989773 14.6943738,11.8989773 C13.7214195,11.8989773 13.1419741,12.5572385 12.8873692,13.1931378 C12.7942441,13.4199071 12.7713547,13.7380143 12.7713547,14.0561215 L12.7713547,20 Z M5.91549304,7.83098607 C4.85759544,7.83098607 4,6.97339063 4,5.91549304 C4,4.85759544 4.85759544,4 5.91549304,4 C6.97339063,4 7.83098607,4.85759544 7.83098607,5.91549304 C7.83098607,6.97339063 6.97339063,7.83098607 5.91549304,7.83098607 Z"/>
          </svg>
        </a>
        <a href='https://twitter.com/abdullahmokbl'>
          <svg viewBox="0 0 24 24" >
            <path d="M20.4240011,6.75697057 C19.7837813,7.05498022 19.0944711,7.25651193 18.3714114,7.34655801 C19.1098119,6.88346388 19.6763962,6.14915952 19.9433249,5.27442615 C19.2519693,5.70321702 18.488001,6.01516237 17.6718741,6.18239081 C17.0214272,5.45451832 16.0917789,5 15.0629273,5 C13.0901094,5 11.48956,6.67764426 11.48956,8.74656019 C11.48956,9.04028193 11.5202414,9.32542786 11.5816043,9.59985401 C8.6106163,9.44334534 5.97712432,7.95329709 4.21294038,5.68392143 C3.90510307,6.2392056 3.72919603,6.88346388 3.72919603,7.56952926 C3.72919603,8.86876558 4.36021139,10.0157812 5.31951837,10.6879108 C4.7345252,10.6696872 4.18225892,10.4992429 3.69953729,10.2205288 L3.69953729,10.2666238 C3.69953729,12.0825531 4.93190926,13.5972569 6.56825378,13.9402895 C6.26859819,14.0281917 5.95257916,14.0721427 5.62633297,14.0721427 C5.39622202,14.0721427 5.17122464,14.0496312 4.95338628,14.0056802 C5.4084946,15.4935845 6.72779738,16.5773534 8.29255183,16.6062968 C7.0693843,17.6118113 5.52712958,18.2110466 3.85294458,18.2110466 C3.56453886,18.2110466 3.27920128,18.1938949 3,18.1595917 C4.58214061,19.2208491 6.46189139,19.8415238 8.47970874,19.8415238 C15.0557683,19.8415238 18.6506127,14.1332454 18.6506127,9.18178292 C18.6506127,9.01884239 18.6475445,8.85590186 18.6414083,8.69617726 C19.3399228,8.16769252 19.946393,7.50842656 20.4240011,6.75697057"/>
          </svg>
        </a>
        <a href='https://github.com/Abdullahmokbl'>
          <svg viewBox="0 0 24 24" >
            <path d="M17.1663776,4.59746853 C16.3436643,3.18784615 15.2277063,2.07184615 13.8182098,1.24921678 C12.4085035,0.426545455 10.8695245,0.0153146853 9.20018182,0.0153146853 C7.53104895,0.0153146853 5.99156643,0.426671329 4.58215385,1.24921678 C3.17253147,2.0718042 2.05661538,3.18784615 1.2339021,4.59746853 C0.411314685,6.00704895 0,7.54632168 0,9.21524476 C0,11.22 0.584895105,13.0227273 1.75497902,14.6238881 C2.92493706,16.2251748 4.43634965,17.3332028 6.28909091,17.9480979 C6.50475524,17.9881259 6.66440559,17.959972 6.76820979,17.8643497 C6.87205594,17.7686014 6.92391608,17.6486853 6.92391608,17.5051049 C6.92391608,17.4811469 6.92186014,17.2656084 6.91787413,16.8582378 C6.91376224,16.4508671 6.91183217,16.0954825 6.91183217,15.7922517 L6.63629371,15.8399161 C6.46061538,15.8720979 6.23899301,15.8857343 5.97142657,15.8818741 C5.70398601,15.8781399 5.42634965,15.8501119 5.1388951,15.798 C4.85131469,15.7463497 4.58383217,15.6265594 4.33623776,15.4388811 C4.08876923,15.2512028 3.91309091,15.0055385 3.80924476,14.7022657 L3.68945455,14.4266014 C3.60960839,14.2430769 3.4839021,14.0392028 3.31216783,13.8157343 C3.14043357,13.5920559 2.96676923,13.4404196 2.79109091,13.3605734 L2.70721678,13.3005315 C2.65132867,13.2606294 2.59946853,13.2125035 2.55151049,13.1566573 C2.50359441,13.1008112 2.46772028,13.0449231 2.44376224,12.988951 C2.41976224,12.9329371 2.43965035,12.886993 2.50363636,12.850951 C2.56762238,12.8149091 2.68325874,12.7974126 2.85104895,12.7974126 L3.09054545,12.8332028 C3.25027972,12.8652168 3.44786014,12.9608392 3.68353846,13.1206573 C3.91909091,13.2803497 4.11272727,13.487958 4.26448951,13.7433986 C4.44826573,14.0709231 4.66967832,14.3204895 4.92935664,14.4922238 C5.18882517,14.663958 5.45043357,14.7496783 5.71393007,14.7496783 C5.97742657,14.7496783 6.20500699,14.7297063 6.39675524,14.689972 C6.58829371,14.650028 6.768,14.589986 6.93579021,14.5101818 C7.00766434,13.9748811 7.20335664,13.5636503 7.5226993,13.2761958 C7.06753846,13.2283636 6.65832168,13.1563217 6.29483916,13.0605315 C5.93156643,12.9646154 5.55616783,12.808951 5.1688951,12.5931189 C4.78141259,12.3775804 4.45997203,12.1099301 4.20448951,11.7906294 C3.94896503,11.4711608 3.73925874,11.0517483 3.57566434,10.5327692 C3.41198601,10.0135804 3.33012587,9.41467133 3.33012587,8.73587413 C3.33012587,7.76937063 3.64565035,6.94690909 4.27657343,6.26802797 C3.98102098,5.5413986 4.00892308,4.72682517 4.36036364,3.82439161 C4.59197203,3.75243357 4.93544056,3.80643357 5.3906014,3.98605594 C5.84584615,4.16576224 6.17916084,4.31970629 6.39088112,4.44734266 C6.6026014,4.57493706 6.77223776,4.68306294 6.90004196,4.77075524 C7.64290909,4.56318881 8.40952448,4.45938462 9.2000979,4.45938462 C9.99067133,4.45938462 10.7574545,4.56318881 11.5003636,4.77075524 L11.9555664,4.48338462 C12.2668531,4.29163636 12.6344476,4.11591608 13.0574685,3.95618182 C13.4807413,3.79653147 13.8044056,3.75255944 14.0281259,3.82451748 C14.3873706,4.72699301 14.4193846,5.54152448 14.1237483,6.26815385 C14.7546294,6.94703497 15.0702797,7.76970629 15.0702797,8.736 C15.0702797,9.4147972 14.9881259,10.0155944 14.8246993,10.5387692 C14.6610629,11.062028 14.4495524,11.481021 14.1900839,11.7966294 C13.9303217,12.1121958 13.6068252,12.3777483 13.2195524,12.5932448 C12.8321958,12.8089091 12.4566713,12.9645734 12.0933986,13.0604895 C11.729958,13.1564056 11.3207413,13.2284895 10.8655804,13.2764056 C11.2807133,13.6356503 11.4883217,14.2027133 11.4883217,14.9773427 L11.4883217,17.5047692 C11.4883217,17.6483497 11.5382517,17.7682238 11.6381958,17.864014 C11.738014,17.9596364 11.8956503,17.9877902 12.1113147,17.9477203 C13.9643077,17.3329091 15.4757203,16.2248392 16.6456364,14.6235524 C17.8154266,13.0223916 18.4005315,11.2196643 18.4005315,9.21490909 C18.4001119,7.5461958 17.9885874,6.00704895 17.1663776,4.59746853 Z"/>
          </svg>
          </a>
        </div>
    </footer>
  )
}
