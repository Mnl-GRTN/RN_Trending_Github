import React from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
import { StyleSheet } from 'react-native';

export const CustomModal = ({handleOptionSelect, options, defaultValue}) => {
    
    return(
        <ModalDropdown
            defaultValue={defaultValue}
            options={options}
            style={styles.inputDate}
            dropdownStyle={styles.dropdown}
            dropdownTextStyle={styles.dropdownText}
            textStyle={styles.dropdownHeadText}
            onSelect={handleOptionSelect}
            defaultIndex={0}>
        </ModalDropdown>
    );
};

    const styles = StyleSheet.create({
        inputDate:{
            width: '50%',
            height: 40,
            justifyContent: 'center',
            borderColor: '#a9a9a9',
            borderWidth: 1,
            borderRadius: 6,
            paddingLeft: 8,
            marginHorizontal: 6,
        },
        
        dropdown:{
            width: '40%',
        },
        
        dropdownText:{
            fontSize: 16,
        },
        
        dropdownHeadText:{
            fontSize: 16,
            color: '#5A83BA',
        }
    });
