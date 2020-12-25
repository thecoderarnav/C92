import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';

import db from '../config'

export default class FeedBackScreen extends React.Components{
    constructor() {
        super();
        this.state={
            emailId:'',
      Gender:'',
      firstName:'',
      lastName:'',
     improvements:'',
      reasonforrating:'',
      confirmPassword:'',
      isModalVisible:'false'
        }
    }
}


