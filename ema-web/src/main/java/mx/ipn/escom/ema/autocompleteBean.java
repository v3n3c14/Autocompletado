/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package mx.ipn.escom.ema;


import javax.faces.bean.RequestScoped;

import javax.faces.bean.ManagedBean;
//import javax.faces.bean.ViewScoped;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;


/**
 *
 * @author Dani
 */
@ManagedBean
@RequestScoped
public class autocompleteBean implements Serializable {

    private String txt1;
      
    public String getTxt1() {
        return txt1;
    }

    public void setTxt1(String txt1) {
        this.txt1 = txt1;
    }

      public List<String> complete(String query) {
             List<String> result = new ArrayList<String>();
             for (int i = 0; i < 10; i++) {
             result.add(query + i);
        }

        return result;
    }
    
 
    
}
