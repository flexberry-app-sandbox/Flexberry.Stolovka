﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Stolovka
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    //  *** Start programmer edit section *** (Using statements)

    //  *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Тип блюда.
    /// </summary>
    //  *** Start programmer edit section *** (ТипБлюда CustomAttributes)

    //  *** End programmer edit section *** (ТипБлюда CustomAttributes)
    [AutoAltered()]
    [Caption("Тип блюда")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТипБлюдаE", new string[] {
            "Название as \'Название\'"})]
    [View("ТипБлюдаL", new string[] {
            "Название as \'Название\'"})]
    public class ТипБлюда : ICSSoft.STORMNET.DataObject
    {
        
        private string fНазвание;
        
        //  *** Start programmer edit section *** (ТипБлюда CustomMembers)

        //  *** End programmer edit section *** (ТипБлюда CustomMembers)

        
        /// <summary>
        /// Название.
        /// </summary>
        //  *** Start programmer edit section *** (ТипБлюда.Название CustomAttributes)

        //  *** End programmer edit section *** (ТипБлюда.Название CustomAttributes)
        [StrLen(255)]
        public virtual string Название
        {
            get
            {
                //  *** Start programmer edit section *** (ТипБлюда.Название Get start)

                //  *** End programmer edit section *** (ТипБлюда.Название Get start)
                string result = this.fНазвание;
                //  *** Start programmer edit section *** (ТипБлюда.Название Get end)

                //  *** End programmer edit section *** (ТипБлюда.Название Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (ТипБлюда.Название Set start)

                //  *** End programmer edit section *** (ТипБлюда.Название Set start)
                this.fНазвание = value;
                //  *** Start programmer edit section *** (ТипБлюда.Название Set end)

                //  *** End programmer edit section *** (ТипБлюда.Название Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТипБлюдаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТипБлюдаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТипБлюдаE", typeof(IIS.Stolovka.ТипБлюда));
                }
            }
            
            /// <summary>
            /// "ТипБлюдаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТипБлюдаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТипБлюдаL", typeof(IIS.Stolovka.ТипБлюда));
                }
            }
        }
    }
}
